import React, {useReducer} from 'react'
type InitialStateProp ={
    count: number;
}
// type ActionProp={
//     type: "INCREMENT" | "DECREMENT" | "RESET"
// }
type ActionProp = | {type: "INCREMENT"} | {type: "DECREMENT"} | {type: "RESET"};
const initialState:InitialStateProp ={count: 0}
const reducer = (state:InitialStateProp, action:ActionProp) => {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + 1};
        case "DECREMENT":
            return {count: state.count - 1};
        case "RESET":
            return {count: 0};
        default :
            throw new Error("Unknown action type")
    }
}
const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Count : {state.count}</h1>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
            <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
        </div>
    );
};
export default App
