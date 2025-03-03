// interface ButtonProps {
//     label: string;
//     onClick: ()=>void;
//     disabled: boolean;
// }

// const Button = ({label,onClick,disabled}: ButtonProps) => {
//     return (
//         <div>
//             <button onClick={onClick} disabled={disabled}>
//                 {label}
//             </button>
//         </div>
//     )
// }
// export default Button
// const Button = ({
//                     label,
//                     onClick,
//                     disabled
//                    }: {
//     label:string;
//     onClick:()=>void;
//     disabled: boolean
// }) => {
//     return (
//         <div>
//             <button onClick={onClick} disabled={disabled}>
//                 {label}
//             </button>
//         </div>
//     );
// };
// export default Button
// const Button = (props: {
//     label:string;
//     onClick:()=>void;
//     disabled: boolean
// }) => {
//     return (
//         <div>
//             <button onClick={props.onClick} disabled={props.disabled}>
//                 {props.label}
//             </button>
//         </div>
//     );
// };
// export default Button
import {useState} from "react";

const Button = ({ disabled, clickFirst,clicked}: {
    clickFirst:string;
    clicked?: string;
    disabled: boolean
}) => {
    const [click, setClick] =useState(false);
    const switchClick = () => (
        setClick(!click) )
    return (
        <div>
            <button onClick={switchClick} disabled={disabled}>
                {click?  clicked : clickFirst}
            </button>
        </div>
    );
};
export default Button
