import {useState} from "react";

type User = {
    name : string;
}
const Person = () => {
    const [user, setUser] = useState<User>({name: "Sungjoo"});
    // const changeName = (): void=>{
    //     setUser({...user, name: "Ironheart"} as User);
    // }
    // const changeName = (): void=>{
    //     setUser((prev : {name: string})=>( {...prev, name : prev.name === "Sungjoo" ?  "Evelyn Ha" : "Sungjoo"}))
    // }
    const changeName = (): void =>{
        setUser((prev: User)=> ({...prev, name : prev.name === "Sungjoo" ? "Evelyn Ha" : "Sungjoo"}))
    }
    return (
        <div>
            <h1>Name: {user.name}</h1>
            <button onClick={changeName}>Change Name</button>
        </div>
    )
}
export default Person
