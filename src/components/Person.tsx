import {useState} from 'react'
interface PersonProp{
    name: string;
    age: number
}
const Person = () => {
    // const [user, setUser] = useState<{name: string , age: number}>({
    //     name: "Azima",
    //     age: 17
    // });
    const [user, setUser] = useState<PersonProp>({
        name: "Azima",
        age: 17
    });
    const changeUser =()=>setUser({...user, name: "Hedo"})
    return (
        <div>
            {user.name}
            {user.age}
            <button onClick={changeUser}>change name </button>
        </div>
    )
}
export default Person
