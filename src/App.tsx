import React, {useEffect, useRef, useState} from 'react'

const App: React.FC = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef<number | null>(null);// correct type for setInterval
    const [isRunning, setRunning] = useState<boolean>(false);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setCount(prev => prev + 1);
            }, 1000);
        } else {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }

        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isRunning]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setRunning(prev => !prev)}>
                {isRunning ? "Stop" : "Start"}
            </button>
        </div>
    )
}
export default App
