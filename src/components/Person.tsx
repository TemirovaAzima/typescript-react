import {useEffect, useState} from "react";
type User ={
    id: number;
    name: string;
    email: string;
}

const Person = () => {
    const[users, setUsers] = useState<User[]|null>(null);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response)=>response.json())
            .then((data : User[]) => setUsers(data))
            .catch((error)=> console.error("Error fetching users:",error));
    }, [])
    return (
        <div>
            <h1>User List</h1>
            {users === null ? ( // Check if data is still null
                <p>Loading ...</p>
            ):(
                <ul>{users.map((user)=>(
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}</ul>
            )}
        </div>
    );
}
export default Person
