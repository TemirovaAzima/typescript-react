import {useState} from "react";


const Person = () => {
    const [friends, setFriends] = useState<string[]>(["Lisa", "Jennie"]);
    // const addFriend =(): void=>setFriends([...friends,"Rosie"])
    const addFriend : ()=>void =()=>setFriends([...friends,"Rosie"])
    return (
        <div>
            {friends.map((friend : string)=>(
                <li key={Math.random()}>{friend}</li>
            ))}
            <button onClick={addFriend}>add Friend</button>
        </div>
    )
}
export default Person
