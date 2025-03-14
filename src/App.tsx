import React, {useReducer, useState} from 'react'
import {initialStateFunction, todoReducer} from "./todoReducer.ts";

// Main TodoApp component with JSX.Element return type
const App: React.FC = ()=> {
    const [todos, dispatch] = useReducer(todoReducer, [], initialStateFunction);
    const [newTodo, setNewTodo] = useState<string>("");
    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
            />
            <button onClick={() => {
                if (newTodo.trim()) {
                    dispatch({type: "ADD_TODO", payload: newTodo});
                    setNewTodo("");
                }
            }}
            >
                Add Todo
            </button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{textDecoration: todo.completed ? "line-through" : "none"}}>
                        {todo.text}
                        <button onClick={() => dispatch({type: "TOGGLE_TODO", payload: todo.id})}>
                            Toggle
                        </button>
                        <button onClick={() => dispatch({type: "DELETE_TODO", payload: todo.id})}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default App
