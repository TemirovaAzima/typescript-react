import {UserProp} from "./context/UserContext.tsx";

export type UserContextProp={
    user: UserProp
    updateUser: (newName:string)=>void
}