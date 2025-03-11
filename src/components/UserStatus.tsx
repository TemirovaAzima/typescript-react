import React, {JSX} from "react";

interface UserStatusProp{
    loggedIn: boolean;
    isAdmin: boolean;
}

const UserStatus: React.FC<UserStatusProp> = ({loggedIn, isAdmin} ): JSX.Element => {
    if (loggedIn && isAdmin){
        return <h1>Welcome Admin</h1>
    }else{
        return <h1>Welcome User</h1>
    }

}
export default UserStatus
