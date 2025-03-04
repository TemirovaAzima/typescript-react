//
// interface NumberListProp {
//     readonly name : string;
//     readonly age : number;
// }
// interface PersonProp{
//     person: NumberListProp
// }

const NumberList = ({person} : {person: {readonly name: string; readonly age: number}}) => {
    return (
        <div>
            {person.name}
            {person.age}
        </div>
    )
}
export default NumberList
