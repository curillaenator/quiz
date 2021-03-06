import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { TState } from "../redux/store";

// STATE

export interface IQuestion {
  category: string;
  type: "boolean" | "multiple";
  difficulty: "easy" | "medium" | "hard";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface IAnswer {
  question: string;
  answer: string[];
}

export interface IMainState {
  isQuestions: boolean;
  questions: IQuestion[] | [];
  curQuestion: number;
  answers: IAnswer[] | [];
  isResults: boolean;
}

// REDUCERS

export type TAction<T> = (payload: T) => { type: string; payload: T };
export type TThunk = ThunkAction<void, TState, unknown, AnyAction>;
