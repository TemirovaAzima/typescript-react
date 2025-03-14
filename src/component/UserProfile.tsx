import React, {useContext} from 'react'
import {UserContext} from '../context/UserContext.tsx'
const UserProfile:React.FC = () => {
    const context = useContext(UserContext)
    if(!context){
        throw new Error("UserContext must be used within a UserProvider")
    }
    // const user= context.user
    const {user} = context

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {user.name}</p>
        </div>
    )
}
export default UserProfile
