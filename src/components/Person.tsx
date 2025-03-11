import {useState} from 'react'

const Person = () => {
    const [items, setItems] = useState<string[]>(["Apple","Banana", "Cherry"])
    const changeItem =()=>setItems([...items, "Mango"])
    const deleteItem =()=>setItems(items.filter((item)=>item=== "Mango" ? item !=="Mango": item))
    const updateInfoItem =()=>setItems(items.map((item)=> item === "Mango" ? "Mango only fav" : item ))
    return (
        <div>
            {items.map((item: string)=>(
                <li key={Math.random()}>{item}</li>
            ))}
            <button onClick={changeItem}>Add Mango</button>
            <button onClick={deleteItem}>Delete Mango</button>
            <button onClick={updateInfoItem}>Update Mango</button>


        </div>
    )
}
export default Person
