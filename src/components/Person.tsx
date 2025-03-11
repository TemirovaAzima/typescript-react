

const Person = ({name,age}: {name: string ; age: number}) => {
    return (
        <div>
            <h4>{name}</h4>
            <p>{age}</p>
        </div>
    )
}
export default Person
