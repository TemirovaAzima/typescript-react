import React, {useContext, useState} from 'react';
import {UserContext} from '../context/UserContext.tsx';
const UpdateUser:React.FC = () => {
    const [newName,setNewName] = useState("");
    const context = useContext(UserContext);
    if(!context){
        throw new Error("UserContext must be used within a UserProfile");
    }
    const updateUser= context.updateUser;

    const handleSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(newName.trim()){
            updateUser(newName);
            setNewName("")
        }
    };

    return (
        <div>
            <h2>Update User Name</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={newName}
                placeholder="Enter new name"
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewName(e.target.value)}
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};
export default UpdateUser
