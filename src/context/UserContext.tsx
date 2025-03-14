import {createContext, useState} from "react";
import React from 'react'
import {UserContextProp} from "../type.ts";
export type UserProp={
    name: string,
}
export const UserContext = createContext<UserContextProp|undefined>(undefined);
const UserProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
    const [user,setUser] = useState<UserProp>({name: "John Doe"});

    const updateUser =(newName:string)=>{
        setUser({name: newName})
    }

    return (
         <UserContext.Provider value={{user,updateUser}}>
             {children}
         </UserContext.Provider>
    )
}
export default UserProvider
