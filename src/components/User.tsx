// const User = (props :
//                   {name:string; age: number}
//  ) =>{
//     return(
//         <div>
//             <h1>Name: {props.name}</h1>
//             <h1>Age: {props.age}</h1>
//         </div>
//     )
// }
// export default User

// const User = (
//     {name,age} :
//         {name:string; age: number}
// ) =>{
//     return(
//         <div>
//             <h1>Name: {name}</h1>
//             <h1>Age: {age}</h1>
//         </div>
//     )
// }
// export default User
// type UserShape ={
//     name: string;
//     age: number;
// }
interface UserShape {
    name: string;
    age: number;
}
// difference between type and interface : interface is mainly for objects cant use primitives and intersection (&)
// instead uses extended and union itself but inside
// of object can and is good for merging interface by using the same name of interface
// type is preferred for functions
const User = ({name,age} :UserShape) =>{
    return(
        <div>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
        </div>
    )
}
export default User