import React, {useEffect, useRef, useState} from 'react'

const App: React.FC = () => {
    const [count,setCount] = useState<number>(0);
    const prevCountRef = useRef<number|null>(null);

    useEffect(()=>{ // useEffect runs after rendering and after render,useEffect updates value
        prevCountRef.current = count; // stores previous value on every count update
    },[count]);

    return (
        <div>
            <p>Current Count: {count}</p>
            <p>Previous Count: {prevCountRef.current !==null ? prevCountRef.current : "N/A"}</p>
            <button onClick={()=>setCount(prev=>prev+1)}>Increase</button>
        </div>
    )
}
export default App
