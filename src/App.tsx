import React, {useEffect, useRef, useState} from 'react'

const App: React.FC = () => {
    const countRef = useRef<number>(0); // does nt trigger re-renders
    const [stateCount, setStateCount] = useState<number>(0); // triggers re-renders

    useEffect(() => {
        console.log("Component re-rendered!"); // logs message every time the component re-renders
    });

    const incrementState = () => {
        setStateCount((prev:number) => prev + 1); // triggers re-render
    };
    const incrementRef = () => {
        countRef.current++;
        console.log("Ref count", countRef.current);//updates only in console
    };
    return (
        <div>
            {console.log("Rendering...")}
            <p>State Count: {stateCount}</p>
            <p>Ref Count (Ko‘rinmaydi): {countRef.current}</p>
            <button onClick={incrementState}>Increase State</button>
            <button onClick={incrementRef}>Increase Ref</button>
        </div>
    )
}
export default App
