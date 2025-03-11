import {useState} from "react";

const Person = () => {
   const [friends, setFriends] = useState<(string | number)[]>(["Lisa", "Jennie","Dex",24])
    return (
        <div>
            {friends.map((friend) => (
                <li key={Math.random()}>{typeof friend === "number" ? `Age: ${friend}` : `Name: ${friend}`}</li>
            ))}
        </div>
    )
}
export default Person

