import {FormEvent, useRef, useState} from "react";
type FormType ={
     name: string,
     email: string,
     password: string,
}

const Form = () => {
    const [submittedData, setSubmittedData] = useState<FormType>({
        name: "",
        email: "",
        password: "",
    });
    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
   // hotUpdated means that updates te application without a full page reload
    const handleClick = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        // const nameValue = name.current?.value || ""
        const nameValue = name.current?.value ?? ""
        // this way, only null and undefined will trigger the fallback value
        // however || can be sometimes problematic because it treats 0 and false as
        // falsy values. A safer alternative is using ?? (nullish coalescing)
        // here value can be null or undefined it will return empty string
        // const nameValue = name.current!.value
        const emailValue = email.current!.value
        const passwordValue = password.current!.value

        setSubmittedData ({
            name: nameValue,
            email: emailValue,
            password: passwordValue,
        })

    }
    return (
             // form benefits are that when u press enter in  keyboard good for screen readers
           <form onSubmit={handleClick}>
               <input type={"text"} placeholder={"Enter Your Name..."} ref={name}/>
               <input type={"text"} placeholder={"Enter Your Email..."} ref={email}/>
               <input type={"password"} placeholder={"Enter Your Password..."} ref={password}/>
               <button type={"submit"}>Submit</button>
               <section>
                   <h1>Name: {submittedData.name}</h1>
                   <h1>Email: {submittedData.email}</h1>
                   <h1>Password: {submittedData.password}</h1>
               </section>
           </form>

    )
}
export default Form
