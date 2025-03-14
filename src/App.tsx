import React, {useReducer, useState} from 'react';
import {cartReducer, initialStateFunction} from './cartReducer.ts';

const App: React.FC = () => {
    const [cart, dispatch] = useReducer(cartReducer, [], initialStateFunction);
    const [newItem, setNewItem] = useState<string>("");
    return (
        <div>
            <h2>Shopping Cart</h2>
            <input
                type="text"
                value={newItem}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewItem(e.target.value)}
            />
            <button
                onClick={() => {
                    if (newItem.trim()) {
                        dispatch({type: "ADD_ITEM", payload: newItem});
                        setNewItem("");
                    }
                }}
            >
                Add Item
            </button>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity}
                        <button onClick={() => dispatch({type: "INCREASE_QUANTITY", payload: item.id})}>
                            +
                        </button>
                        <button onClick={() => dispatch({type: "DECREASE_QUANTITY", payload: item.id})}>
                            -
                        </button>
                        <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: item.id})}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default App
