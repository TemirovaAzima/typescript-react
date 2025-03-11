import  {useState} from 'react'

const Counter = () => {
    const [count,setCount] = useState<number>(0);
    return (
        <div>
            <h2>Counter</h2>
            <h2>{count}</h2>
            <button onClick={()=>setCount((prev: number)=> prev +1)}>increment</button>
            <button onClick={()=> setCount((prev: number)=>prev-1)}>decrement</button>
        </div>
    )
}
export default Counter
