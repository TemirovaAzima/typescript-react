import React, {useEffect, useState} from 'react'

const App: React.FC = () => {
    const [value, setValue] = useState<number>(0);
    const [smth, setSmth] = useState<number>(1)

    useEffect(() => {
        if (value > 3) {
            console.log("UseEffect hook");
            document.title = `Increment ${value} ${smth}`;
        }
    }, [value, smth]); // dependency array to prevent unnecessary re-renders

    return (
        <div>
            <h2>{value}</h2>
            <h2>{smth}</h2>
            <button onClick={() => setValue(value + 1)}>Increment</button>
            <button onClick={() => setSmth(smth + 1)}>Increment</button>
        </div>
    );
};
export default App
