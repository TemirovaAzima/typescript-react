import React from 'react'
import {useReducer} from 'react'
//Define the quiz state
type QuizState={
    currentQuestion:number;
    score:number;
    finished: boolean;
};
// Define action types
type QuizAction={type:"ANSWER",correct:boolean} | {type:"RESET"}

// Initial State
const initialState :QuizState={
    currentQuestion:0,
    score: 0,
    finished:false,
}
// Reducer function
const quizReducer =(state:QuizState,action:QuizAction):QuizState =>{
    switch(action.type){
        case "ANSWER":
            // const nextQuestion = state.currentQuestion + 1;
            // return nextQuestion >= questions.length
            //     ? {...state,finished: true} //React does not update state immediately when calling type: "ANSWER
            //     : {      // instead, it schedules the update, which means that the score might not increment in time before the
            //              // final check {finished: true} is set.
            //         currentQuestion:nextQuestion,
            //         score: action.correct? state.score + 1 : state.score,
            //         finished:false
            //       };
            const nextQuestion = state.currentQuestion +1
            return{
                currentQuestion: nextQuestion,
                score: action.correct? state.score + 1 : state.score ,
                finished : nextQuestion>= questions.length
            }
        case "RESET":
            return initialState;
        default:
            return state;
    }
};

// Sample Quiz Questions
const questions =[
    {
        question: "What is the capital of France?",
        options: ["Madrid", "Berlin","Paris","Rome"],
        answer:"Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth","Mars","Jupiter","Venus"],
        answer:"Mars"
    },
    {
        question: "What is 2 + 2?",
        options: ["3","4","5","6"],
        answer:"4"
    }
]

const Quiz:React.FC = () => {
    const[state,dispatch] = useReducer(quizReducer,initialState);
   const  {currentQuestion,score,finished} = state;
    return (
        <div>
            <h1>Quiz App</h1>
            {finished ? (
                <div>
                    <h2>Your score : {score}/ {questions.length}</h2>
                     <button onClick={()=>dispatch({type: "RESET"})}>Restart Quiz</button>
                </div>
            ): (
                <div>
                    <h2>{questions[currentQuestion].question}</h2>
                    {questions[currentQuestion].options.map((option)=> (
                        <button
                            key={option}
                            onClick={()=>dispatch({type:"ANSWER", correct: option===questions[currentQuestion].answer})}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
export default Quiz
