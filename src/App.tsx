import React, { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");


    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Add a new todo"
                />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map((todo: string, index:number) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;