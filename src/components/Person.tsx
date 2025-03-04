interface PersonProp{
    name: string;
    // greet: ()=>string
    greet():string;
}
const Person = ({person}: {person:PersonProp}) => {
    return (
        <div>
           <h1>{person.greet()}</h1>
            <h1>{person.name}</h1>
        </div>
    )
}
export default Person
