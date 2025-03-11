import React, {JSX} from "react";
type PasswordProp={
    isValid : boolean,
}
const ValidPassword=() :JSX.Element=><h1>Right Password</h1>
const InValidPassword =(): JSX.Element=> <h1>Wrong Password</h1>
// const Password: React.FC<PasswordProp>=({isValid})=>{
//     if(isValid){
//         return ValidPassword()
//     }else{
//         return InValidPassword()
//     }
// }

// using ternary operator
const Password: React.FC<PasswordProp>=({isValid})=>{
   return  isValid ? <ValidPassword/> : <InValidPassword/>;
}

const App = () => {
    return (
        <div>
          <Password isValid={true}/>
        </div>
    )
}
export default App
