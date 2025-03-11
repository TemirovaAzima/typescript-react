
const Person = () => {
    const mixedArray: (string | number | {name : string})[] = ["Bob", 2, {name: "Marv"}]
    return (
        <div>
            <h1>Mixed List</h1>
            <ul>
                {mixedArray.map((item: string | number | {name: string})=>(
                    <li key={Math.random()}>
                        {typeof item === "string" && `String : ${item}`}
                        {typeof item === "number" && `Number : ${item}`}
                        {typeof item === "object" && `Object Name : ${item.name}`}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Person



