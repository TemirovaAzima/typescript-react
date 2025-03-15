import React, {useEffect, useState} from 'react'

type TodoType = {
    id: number;
    title: string;
};

export const App: React.FC = () => {
    const [data, setData] = useState<TodoType[]>([]);

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                const result: TodoType[] = await response.json();
                if (result && result.length) setData(result);
            } catch (error) {
                console.error("Error fetching data", error)
            }
        }

        getData();
    }, []);

    const changeTitle = () => {
        setData(data.map((todo: TodoType) => (
                todo.id === 2 ? {...todo, title: "Slay girl"} : todo
            ))
        );
    };

    const deleteTitle = (id: number) => {
        setData(data.filter((todo) => (
            todo.id !== id
        )));
    };

    return (
        <div>
            {data.length > 0 ? (
                <ul>
                    {data.map((todo: TodoType) => (
                        <li key={todo.id}>
                            {todo.title}
                            <button onClick={() => deleteTitle(todo.id)}>Delete title</button>
                        </li>

                    ))}
                </ul>
            ) : (
                <p> Loading...</p>
            )}
            <button onClick={changeTitle}>Change title</button>
        </div>
    );
};
export default App
