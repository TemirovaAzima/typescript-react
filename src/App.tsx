import React from "react";


const App =()=>{

    return (
        <main>
           <User name={"Azima"}/>
        </main>
    )
}
export default App
type UserProp={
    name: string
}
// const User =(props : {name: string})=>{
//     console.log(props)
//     return(
//         <section>
//              <h4>{props.name}</h4>
//         </section>
//     )
// }
// const User =(props : UserProp)=> {
//     console.log(props)
//     return (
//         <section>
//             <h4>{props.name}</h4>
//         </section>
//     )
// }
const User: React.FC<UserProp> =(props)=> {
    console.log(props)
    return (
        <section>
            <h4>{props.name}</h4>
        </section>
    )
}