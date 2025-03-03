// type Info = {
//     id: number;
//     name: string;
//     email: string;
// };
//
// type AdminInfo = Info & {
//     role: string;
//     lastLogin: Date;
// }
// export { type Info, type AdminInfo}
interface Info{
    id: number;
    name: string;
    email: string;
}

interface AdminInfoList extends Info{
    role: string;
    lastLogin: Date;
}

export {type Info, type AdminInfoList}