import React, {useEffect, useState} from 'react'

type TodoType = {
    id: number,
    title: string,
}
export const App: React.FC = () => {
    const [data, setData] = useState<TodoType[]>([]);

    useEffect(() => {

        async function getData() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos")
                const data: TodoType[] = await response.json()
                if (data && data.length) setData(data)
            } catch (error) {
                console.error("Error fetching data")
            }
        }
        getData();
    }, [])

    return (
        <div>
            {data.map((todo: TodoType) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </div>
    );
};
export default App
