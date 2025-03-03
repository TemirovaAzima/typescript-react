import {ReactNode} from "react"
// children prop is special prop that allows components to wrap and render content inside them
type UserProp={
    children: ReactNode
}
const User = ({children}: UserProp) => {
    return (
        <div>
            {children}
        </div>
    )
}
export default User
// const User = ({children} :{children: ReactNode}) => {
//     return (
//         <div>
//
//             {children}
//         </div>
//     )
// }
// export default User
