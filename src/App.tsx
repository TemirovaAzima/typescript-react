import React from "react";
import UserProvider from './context/UserContext.tsx'
import UserProfile from './component/UserProfile.tsx'
import UpdateUser from "./component/UpdateUser.tsx";

const App: React.FC =()=>{

    return(
       <UserProvider>
           <UserProfile/>
           <UpdateUser/>
       </UserProvider>

    )
}
export default App;