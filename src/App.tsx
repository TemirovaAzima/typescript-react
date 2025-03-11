import React from "react";

type UserProp={
    name: string;
    age: number;
    hobbies: string[];
}

const App = () => {
    return (
        <User name={"Azima"} age={17} hobbies={["Coding","Watching Kdramas"]}/>
    )
}
export default App

// const User =(props : {name: string; age: number; hobbies:string[]})=>{
//     console.log(props)
//     return(
//         <section>
//             <h4>{props.name}</h4>
//             <h4>{props.age}</h4>
//             <ul>{props.hobbies.map((hobby)=>(
//                 <li key={Math.random()}>{hobby}</li>
//             ))}</ul>
//         </section>
//
//     )
// }
// const User =({name,age,hobbies} : UserProp)=>{
//     console.log(name,age,hobbies);
//     return(
//         <section>
//             <h4>{name}</h4>
//             <h4>{age}</h4>
//             <ul>{hobbies.map((hobby)=>(
//                 <li key={Math.random()}>{hobby}</li>
//             ))}</ul>
//         </section>
//
//     )
// }
const User: React.FC<UserProp> =({name,age,hobbies})=>{
    console.log(name,age,hobbies);
    return(
        <section>
            <h4>{name}</h4>
            <h4>{age}</h4>
            <ul>{hobbies.map((hobby)=>(
                <li key={Math.random()}>{hobby}</li>
            ))}</ul>
        </section>

    )
}

