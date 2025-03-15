import React, {useRef} from 'react'

const App:React.FC = () => {
    const inputRef = useRef<HTMLInputElement|null>(null);
    const focusInput = ()=>{
        // inputRef.current!.focus();
        // inputRef.current!.value="hehe"
        if(inputRef.current){
            inputRef.current.focus();
            inputRef.current.value="hehe"
        }
    }
    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Enter User Name"/>
            <button onClick={focusInput}>focus input</button>
        </div>
    )
}
export default App
