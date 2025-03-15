import React, {useRef, useState} from 'react'

const App:React.FC = () => {
    const [message,setMessage]=useState<string>("Waiting...");
    const timeoutRef = useRef<null|number>(null);
    const startTimeout = ()=>{
        setMessage("Waiting...");
        timeoutRef.current = setTimeout(()=>{
            setMessage("Timeout finished");
        },2000);
    };

    const cancelTimeout = ()=>{
        if(timeoutRef.current !==null){
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
            setMessage("Timeout canceled")
        }
    }
    return (
        <div>
            <h2>{message}</h2>
            <button onClick={startTimeout}>Start Timeout</button>
            <button onClick={cancelTimeout}>Cancel Timeout</button>
        </div>
    )
}
export default App
