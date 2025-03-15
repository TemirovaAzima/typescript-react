import React, {useEffect, useRef, useState} from 'react'

const App: React.FC = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef<number | null>(null);// correct type for setInterval
    const [isRunning, setRunning] = useState<boolean>(false);

    const startInterval = () => {
        if (!isRunning) {
            intervalRef.current = setInterval(() => {
                setCount(prev => prev + 1)
            }, 1000);
            setRunning(true);
        }
    };

    const stopInterval = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setRunning(false);
        }
    };

    const toggleInterval = () => {
        if (isRunning) {
            stopInterval();
        } else {
            startInterval();
        }
    };

    // Cleanup interval when component unmount
    useEffect(() => {
        return () => startInterval()
    }, []);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={toggleInterval}>
                {isRunning ? "Stop" : "Start"}
            </button>
        </div>
    )
}
export default App
