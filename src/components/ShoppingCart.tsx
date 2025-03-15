import React, {useState} from "react";

type ItemsType = {
    name: string,
    quantity: number,
}

export const ShoppingCart = () => {
    // initial state is defined empty
    const [items, setItems] = useState<ItemsType[]>([]);
    const [name, setName] = useState<string>("");
    // const [quantity,setQuantity] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);

    // function for submitting form
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !quantity) return;

        // object for new item
        // const quantityNumber = parseInt(quantity);
        // if (quantityNumber > 0) {
        //     const newItem: ItemsType = {
        //         name,
        //         quantity: quantityNumber
        //     };
        //
        //
        //     // update item
        //
        //     setItems((prevItems) => [...prevItems, newItem]);
        //
        //     // Clean inputs
        //     setName("");
        //     setQuantity("");
        // }
        if (quantity < 0) return;

        const newItem: ItemsType = {
            name,
            quantity: quantity
        };

        // update item

        setItems((prevItems) => [...prevItems, newItem]);

        // Clean inputs
        setName("");
        setQuantity(0);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Item name"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuantity(Number(e.target.value))}
                />
                <button type={"submit"}>Add Item</button>
            </form>
            <ul>
                {items.map((item: ItemsType) => (
                    <li key={Math.random()}>
                        {item.name} - quantity: {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};