import React, {useReducer, useState} from "react";
import {counterReducer, initialState} from "../counterReducer.ts";

function Counter() {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [inputValue, setInputValue] = useState<number>(0);

    const handleIncrement = ()=>dispatch({type:"increment"});
    const handleDecrement = ()=>dispatch({type:"decrement"});
    // isNan : js first tries to convert it into a number before checking if it's NaN
    const handleIncrementByAmount =()=>{
        if(!isNaN(inputValue)){
            dispatch({type:"incrementByAmount", payload:inputValue});
            setInputValue(0);
        }
    };
    // const handleIncrementByAmount =()=>{
    //     if(state.count >0){
    //         dispatch({type:"incrementByAmount", payload:inputValue});
    //         setInputValue(0);
    //     }
    // };

    const handleDecrementByAmount =()=>{
        if(!isNaN(inputValue)){
            dispatch({type:"decrementByAmount", payload:inputValue});
            setInputValue(0);
        }
    };
    // const handleDecrementByAmount =()=>{
    //     if(state.count -inputValue>=0){
    //         dispatch({type:"decrementByAmount", payload:inputValue});
    //         setInputValue(0);
    //     }
    // };

    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <div>
                <input
                    type={"number"}
                    value={inputValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(Number(e.target.value))}
                />
                <button onClick={handleIncrementByAmount}>Add</button>
                <button onClick={handleDecrementByAmount}>Subtract</button>
            </div>
        </div>
    )
}
export default Counter