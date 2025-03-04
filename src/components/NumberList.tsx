
type NumberListProp = {
    readonly name: string;
    age? : number;
}
const NumberList = () => {
    const person: NumberListProp={name: "Azima", age: 17}
    // delete person.name  gives an error
    delete person.age
    console.log(person)
    return (
        <div>
            {person.name}
            {person.age}
        </div>
    )
}
export default NumberList
