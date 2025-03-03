import {Info} from '../types.ts'
import React from "react";
type UserProp ={
    user: Info
}

const UserInfo: React.FC<UserProp>= ({user}) => {
    return (
        <div>
            <h2>UserInfo</h2>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    )
}
export default UserInfo
