import { Reducer, AnyAction } from "redux";
import { batch } from "react-redux";
import { api } from "../../api/api";

import type {
  IQuestion,
  IAnswer,
  IMainState,
  TAction,
  TThunk,
} from "../../types/types";

const SET_IS_QUESTIONS = "main/SET_IS_QUESTIONS";
const SET_QUESTIONS = "main/SET_QUESTIONS";
const SET_CUR_QUESTION = "main/SET_CUR_QUESTION";
const SET_ANSWERS = "main/SET_ANSWERS";
const SET_IS_RESULTS = "main/SET_IS_RESULTS";
const RESET_STATE = "main/RESET_STATE";

const initialState: IMainState = {
  isQuestions: false,
  questions: [],
  curQuestion: 0,
  answers: [],
  isResults: false,
};

export const main: Reducer<IMainState, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_IS_QUESTIONS:
      return { ...state, isQuestions: action.payload };

    case SET_QUESTIONS:
      return { ...state, questions: action.payload };

    case SET_CUR_QUESTION:
      return { ...state, curQuestion: action.payload };

    case SET_ANSWERS:
      return { ...state, answers: action.payload };

    case SET_IS_RESULTS:
      return { ...state, isResults: action.payload };

    case RESET_STATE:
      return { ...initialState };

    default:
      return state;
  }
};

// ACTIONS

const setIsQuestions: TAction<boolean> = (payload) => ({
  type: SET_IS_QUESTIONS,
  payload,
});

const setQuestions: TAction<IQuestion[] | []> = (payload) => ({
  type: SET_QUESTIONS,
  payload,
});

const setCurQuestion: TAction<number> = (payload) => ({
  type: SET_CUR_QUESTION,
  payload,
});

const setAnswers: TAction<IAnswer[] | []> = (payload) => ({
  type: SET_ANSWERS,
  payload,
});

const setIsResults: TAction<boolean> = (payload) => ({
  type: SET_IS_RESULTS,
  payload,
});

export const resetState: TAction<null> = (payload) => ({
  type: RESET_STATE,
  payload,
});

// THUNKS

export const getQuestions = (): TThunk => async (dispatch) => {
  const questions: IQuestion[] = await api.getQuestions();

  batch(() => {
    dispatch(setQuestions(questions));
    dispatch(setIsQuestions(true));
  });
};

export const handleAnswers = (answer: any): TThunk => {
  return (dispatch, getState) => {
    const answers: IAnswer[] = [...getState().main.answers, answer];
    const nextQuestion: number = answers.length;

    if (nextQuestion < 10) {
      batch(() => {
        dispatch(setAnswers(answers));
        dispatch(setCurQuestion(nextQuestion));
      });
    }

    if (nextQuestion >= 10) {
      batch(() => {
        dispatch(setAnswers(answers));
        dispatch(setIsResults(true));
      });
    }
  };
};
