import {useState} from "react";


const Person = () => {
    const [user, setUser] = useState<{name: string; age: number} | null>(null);
    // const [data, setData] = useState<{name: string; age: number} | undefined>(undefined);
    const updateUser =()=>setUser({name: "azima", age: 17})
    return (
        <div>
            {user === null|| undefined ? "" : (
                <p>{user.name} {user.age}</p>
            ) }
            <button onClick={() => updateUser()}>Update Person</button>
        </div>
    )
}
export default Person

