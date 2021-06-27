(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{97:function(n,e,t){},98:function(n,e,t){"use strict";t.r(e);var r,c,a,i,s,o,u,l,d=t(0),j=t.n(d),b=t(23),p=t.n(b),m=t(27),O=t(22),x=t(14),h=t(9),f=function(){return Object(O.c)()},g=O.d,y=t(15),v=t.p+"static/media/loader.8193f7d9.svg",w=t(37),S=t.n(w),T=t(34),_=t.n(T),E=t(53),N=t.n(E),q=t(38),k=t.n(q),I={primaryBrownDark:"#363636",basicWhite:"#ffffff",primaryIndigo900:S.a[900],primaryIndigo800:S.a[800],dangerRed600:k.a[600],okGreen600:_.a[600],okGreen100:_.a[100],easy:_.a[100],medium:N.a[100],hard:k.a[100]},Q=t(2),R=y.a.div(r||(r=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n\n  .loading_svg {\n    width: 40px;\n    height: 40px;\n    margin-right: 8px;\n  }\n\n  .loading_text {\n    font-size: 16px;\n    font-weight: 600;\n    color: ",";\n  }\n"])),I.primaryBrownDark),z=function(){return Object(Q.jsxs)(R,{children:[Object(Q.jsx)("img",{className:"loading_svg",src:v,alt:""}),Object(Q.jsx)("div",{className:"loading_text",children:"Loading"})]})},C=y.a.header(c||(c=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 120px;\n  padding: 0 32px;\n  border-radius: 4px;\n  background-color: ",";\n\n  .title {\n    color: ",";\n    font-size: 22px;\n    font-weight: 900;\n    user-select: none;\n  }\n\n  @media (min-width: 480px) {\n    .title {\n      font-size: 32px;\n    }\n  }\n\n  @media (min-width: 768px) {\n    .title {\n      font-size: 48px;\n    }\n  }\n"])),I.primaryIndigo800,I.basicWhite),U=function(){return Object(Q.jsx)(C,{children:Object(Q.jsx)("h1",{className:"title",children:"IT'S QUIZ TIME!"})})},L=t(121),A=y.a.section(a||(a=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 120px;\n  padding: 32px 0;\n\n  .notation {\n    text-align: center;\n    margin-bottom: 32px;\n  }\n"]))),G=function(){var n=Object(h.g)();return Object(Q.jsxs)(A,{children:[Object(Q.jsx)("h2",{className:"notation",children:"You will be given 10 questiions!"}),Object(Q.jsx)("p",{className:"notation",children:"Don't hesitate and push the button:"}),Object(Q.jsx)(L.a,{variant:"contained",color:"primary",size:"large",onClick:function(){return n.push("/quiz")},children:"Push to start"})]})},M=t(8),W=t(126),B=t(122),D=t(124),H=t(31),Y=t(35),F=t(125),J=function(n){var e=n.input,t=(n.meta,n.label);return Object(Q.jsxs)("div",{children:[Object(Q.jsx)(F.a,Object(M.a)(Object(M.a)({},e),{},{inputProps:{"aria-label":"primary checkbox"},id:e.name})),Object(Q.jsx)("label",{htmlFor:e.name,style:{cursor:"pointer"},children:t})]})},P=t(123),X=function(n){var e=n.input;n.meta;return Object(Q.jsxs)("div",{children:[Object(Q.jsx)(P.a,Object(M.a)(Object(M.a)({},e),{},{id:e.value})),Object(Q.jsx)("label",{htmlFor:e.value,style:{cursor:"pointer"},children:e.value})]})},Z=t(41),K=t.n(Z),V=t(61),$=t(62),nn=t.n($).a.create({baseURL:"https://opentdb.com/api.php?amount=10"}),en=function(){return nn.get("").then((function(n){return n.data.results})).catch((function(n){return alert("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(n.name,": ").concat(n.message))}))},tn="main/SET_IS_QUESTIONS",rn="main/SET_QUESTIONS",cn="main/SET_CUR_QUESTION",an="main/SET_ANSWERS",sn="main/SET_IS_RESULTS",on="main/RESET_STATE",un={isQuestions:!1,questions:[],curQuestion:0,answers:[],isResults:!1},ln=function(n){return{type:tn,payload:n}},dn=function(n){return{type:an,payload:n}},jn=function(n){return function(e,t){var r=[].concat(Object(H.a)(t().main.answers),[n]),c=r.length;c<10&&Object(O.b)((function(){e(dn(r)),e({type:cn,payload:c})})),c>=10&&Object(O.b)((function(){e(dn(r)),e({type:sn,payload:!0})}))}},bn=y.a.div(i||(i=Object(x.a)(["\n  padding: 0 32px;\n\n  .title {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 120px;\n\n    &_difficulty {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: fit-content;\n      height: 40px;\n      margin-left: 32px;\n      padding: 0 16px;\n      border-radius: 4px;\n      background-color: ",";\n    }\n  }\n\n  .options {\n    &_buttons {\n      margin-top: 48px;\n    }\n  }\n"])),(function(n){return n.color})),pn=function(n){n.category;var e=n.type,t=n.difficulty,r=n.question,c=n.correct_answer,a=n.incorrect_answers,i=n.curQ,s=f(),o={easy:I.easy,medium:I.medium,hard:I.hard},u=[].concat(Object(H.a)(a),[c]).sort((function(){return Math.random()-.5})),l=function(n){var e=document.createElement("div");return e.innerHTML=n,e.innerText};return Object(Q.jsxs)(bn,{color:o[t],children:[Object(Q.jsxs)("div",{className:"title",children:[Object(Q.jsx)("h3",{className:"title_question",children:l(r)}),Object(Q.jsx)("div",{className:"title_difficulty",children:t})]}),Object(Q.jsx)(Y.b,{onSubmit:function(n){var t=null;if("multiple"===e){var c=Object.keys(n).map((function(n){return n.replace("OpTiOn","")}));t={question:r,answer:c}}"boolean"===e&&(t={question:r,answer:Object.values(n)}),s(jn(t))},render:function(n){var t=n.handleSubmit,r=n.form,c=n.pristine,a=n.values,s=c||"multiple"===e&&Object.values(a).every((function(n){return!1===n}));return Object(Q.jsxs)("form",{className:"options",onSubmit:t,children:["multiple"===e&&u.map((function(n){return Object(Q.jsx)(Y.a,{name:"OpTiOn".concat(n),label:l(n),type:"checkbox",component:J},"OpTiOn".concat(n))})),"boolean"===e&&u.map((function(n){return Object(Q.jsx)(Y.a,{name:"boolean",type:"radio",value:n,component:X},n)})),Object(Q.jsx)("div",{className:"options_buttons",children:Object(Q.jsx)(L.a,{variant:"contained",color:"primary",size:"large",onClick:function(){r.submit(),r.reset()},disabled:s,children:i<9?"NEXT QUESTION":"WATCH RESULTS"})})]})}})]})},mn=y.a.section(s||(s=Object(x.a)([""]))),On=function(){var n=g((function(n){return n.main})),e=n.questions,t=n.curQuestion,r=n.answers,c=Object(M.a)(Object(M.a)({},e[t]),{},{curQ:t});return r.length>=10?Object(Q.jsx)(h.a,{to:"results"}):Object(Q.jsxs)(mn,{children:[Object(Q.jsx)(W.a,{activeStep:t,children:e.map((function(n,e){return Object(Q.jsx)(B.a,{completed:e<t,children:Object(Q.jsx)(D.a,{})},n.question)}))}),Object(Q.jsx)(pn,Object(M.a)({},c))]})},xn=y.a.section(o||(o=Object(x.a)(["\n  padding: 32px;\n\n  .summary {\n    margin-bottom: 32px;\n    text-align: center;\n  }\n\n  .buttons {\n    display: flex;\n    justify-content: center;\n    margin-top: 32px;\n    margin-bottom: 32px;\n  }\n"]))),hn=y.a.div(u||(u=Object(x.a)(["\n  margin-bottom: 24px;\n  padding: 16px;\n  border-radius: 4px;\n  border: 2px solid\n    ",";\n  background-color: ",";\n\n  .question {\n    margin-bottom: 24px;\n  }\n\n  .answers_string {\n    margin-bottom: 16px;\n  }\n"])),(function(n){return n.correct?I.okGreen600:I.dangerRed600}),(function(n){return n.correct?I.okGreen100:I.basicWhite})),fn=function(){var n=Object(h.g)(),e=f(),t=g((function(n){return n.main})),r=t.questions,c=t.answers,a=r.map((function(n){var e,t=null===(e=c.find((function(e){return e.question===n.question})))||void 0===e?void 0:e.answer.toString();return Object(M.a)(Object(M.a)({},n),{},{answer:t,isCorrect:t===n.correct_answer})})),i=a.reduce((function(n,e){return n+(e.isCorrect?1:0)}),0),s=function(n){var e=document.createElement("div");return e.innerHTML=n,e.innerText};return c.length<10?Object(Q.jsx)(h.a,{to:"/"}):Object(Q.jsxs)(xn,{children:[Object(Q.jsx)("h2",{className:"summary",children:"".concat(i," answer out of ").concat(a.length," is correct!")}),a.map((function(n,e){return Object(Q.jsxs)(hn,{correct:n.isCorrect,children:[Object(Q.jsx)("h3",{className:"question",children:"".concat(e+1,". ").concat(s(n.question))}),Object(Q.jsx)("p",{className:"answers_string",children:"Your answer: ".concat(s(n.answer))}),!n.isCorrect&&Object(Q.jsx)("p",{className:"answers_string",children:"Correct answer: ".concat(s(n.correct_answer))})]},n.question)})),Object(Q.jsx)("div",{className:"buttons",children:Object(Q.jsx)(L.a,{variant:"contained",color:"primary",size:"large",onClick:function(){e({type:on,payload:null}),n.push("/")},children:"TRY AGAIN"})})]})},gn=y.a.main(l||(l=Object(x.a)(["\n  max-width: 1280px;\n  min-width: 768px;\n  margin: 0 auto;\n  color: ",";\n"])),I.primaryBrownDark),yn=function(){var n=f(),e=Object(h.g)(),t=g((function(n){return n.main})),r=t.isQuestions,c=t.isResults;return Object(d.useEffect)((function(){r||n(function(){var n=Object(V.a)(K.a.mark((function n(e){var t;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,en();case 2:t=n.sent,Object(O.b)((function(){e({type:rn,payload:t}),e(ln(!0))}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[n,r]),Object(d.useEffect)((function(){c&&e.push("/results")}),[c,e]),r?Object(Q.jsxs)(gn,{children:[Object(Q.jsx)(U,{}),Object(Q.jsxs)(h.d,{children:[Object(Q.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(Q.jsx)(G,{})}}),Object(Q.jsx)(h.b,{path:"/quiz",render:function(){return Object(Q.jsx)(On,{})}}),Object(Q.jsx)(h.b,{path:"/results",render:function(){return Object(Q.jsx)(fn,{})}})]})]}):Object(Q.jsx)(z,{})},vn=t(63),wn=Object(vn.a)({reducer:{main:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:un,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case tn:return Object(M.a)(Object(M.a)({},n),{},{isQuestions:e.payload});case rn:return Object(M.a)(Object(M.a)({},n),{},{questions:e.payload});case cn:return Object(M.a)(Object(M.a)({},n),{},{curQuestion:e.payload});case an:return Object(M.a)(Object(M.a)({},n),{},{answers:e.payload});case sn:return Object(M.a)(Object(M.a)({},n),{},{isResults:e.payload});case on:return Object(M.a)({},un);default:return n}}}});window.store=wn;t(97);p.a.render(Object(Q.jsx)(j.a.StrictMode,{children:Object(Q.jsx)(m.a,{children:Object(Q.jsx)(O.a,{store:wn,children:Object(Q.jsx)(yn,{})})})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.58a95ad1.chunk.js.map