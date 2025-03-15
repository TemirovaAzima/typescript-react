import React, {useState} from "react";

export const TodoList = () => {
    // Define the state with types
    const [todos, setTodos] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    // Function to handle adding a new todo
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // if (!inputValue) return;
        // setTodos([...todos, inputValue]);
        // setInputValue("");
        if (inputValue.trim()) { // prevent empty or whitespace-ony todos
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    };
    // Function to handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);
    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    value={inputValue}
                    placeholder={"Add a new todo"}
                    onChange={handleChange}
                />
                <button type={"submit"}>Submit</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={Math.random()}>
                        {todo}
                    </li>
                ))}
            </ul>
        </div>
    )
}