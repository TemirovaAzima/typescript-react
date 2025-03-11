import {useRef} from "react";

const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleFocus =()=>{
        inputRef.current?.focus()
    }
    return (
        <div>
            <input type={"text"} placeholder={"Enter something"} ref={inputRef}/>
            <button onClick={handleFocus}>Focus to Input</button>
        </div>
    )
}
export default FocusInput
