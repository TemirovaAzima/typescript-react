import {useState} from 'react'

const Person = () => {
    // const [items, setItems] = useState<string[]>(["Apple","Banana", "Cherry"])
    // const changeItem =()=>setItems([...items, "Mango"])
    // const deleteItem =()=>setItems(items.filter((item)=>item=== "Mango" ? item !=="Mango": item))
    // const updateInfoItem =()=>setItems(items.map((item)=> item === "Mango" ? "Mango only fav" : item ))
    const [users, setUsers] = useState<{name: string; age:number}[]>([
        {name: "Alice", age:25},
        {name: "Bob", age: 30},
    ]);
    const changeUserName = ()=>setUsers(users.map((user)=> user.name==="Alice"? {...user, name:"Alicebay"} : user))
    return (
        <div>
            {users.map((user: {name: string; age: number})=>(
                <li key={Math.random()}>{user.name} {user.age}</li>
            ))}
            <button onClick={changeUserName}>change Alice name </button>
            {/*{items.map((item: string)=>(*/}
            {/*    <li key={Math.random()}>{item}</li>*/}
            {/*))}*/}
            {/*<button onClick={changeItem}>Add Mango</button>*/}
            {/*<button onClick={deleteItem}>Delete Mango</button>*/}
            {/*<button onClick={updateInfoItem}>Update Mango</button>*/}


        </div>
    )
}
export default Person
