import React, {useEffect, useRef, useState} from 'react'

const App: React.FC = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef<number | null>(null); // correct type for setInterval

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current); // clear interval on unmount
            }
        };
    }, []);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null; // reset ref after stopping
                }
            }}>
                Stop
            </button>
        </div>
    )
}
export default App
