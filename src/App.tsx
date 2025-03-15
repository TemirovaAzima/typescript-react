import React, {useRef, useState} from 'react'

const App:React.FC = () => {
    const countRef = useRef<number>(0);
    const [stateCount, setStateCount] = useState<number>(0);

    const incrementState =():void=>{
        setStateCount(stateCount+1)
    };
    const incrementRef = ():void=>{
        countRef.current+=1;
        console.log("ref count:", countRef.current);
    };

    return (
        <div>
           <p>{stateCount}</p>
            <p>{countRef.current}</p>
            <button onClick={incrementState}>Increase state</button>
            <button onClick={incrementRef}>Increase useRef</button>
        </div>
    )
}
export default App
