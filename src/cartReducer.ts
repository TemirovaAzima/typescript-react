// Define the type for a single cart item
interface CartProp {
    id: number;
    name: string;
    quantity: number;
}
// Define the possible action types
type ActionProp =
    | { type: "ADD_ITEM"; payload: string }
    | { type: "INCREASE_QUANTITY"; payload: number }
    | { type: "DECREASE_QUANTITY"; payload: number }
    | { type: "REMOVE_ITEM"; payload: number }
// Initial state function
const initialStateFunction: () => CartProp[] = () => {
    return [
        {id: 1, name: "Apple", quantity: 2},
        {id: 2, name: "Banana", quantity: 3},
    ];
};

// Reducer function
const cartReducer = (state: CartProp[], action: ActionProp) => {
    switch (action.type) {
        case "ADD_ITEM":
            // if item already existed we would increase the quantity
        {
            const existingItem = state.find((item) => item.name === action.payload)
            if (existingItem) {
                return state.map((item) =>
                    item.name === action.payload
                        ? {...item, quantity: item.quantity + 1}
                        : item
                );
            }
            // add a new item
            return [...state, {id: Date.now(), name: action.payload, quantity: 1}];
        }

        case "INCREASE_QUANTITY":
            return state.map((item) =>
                item.id === action.payload
                    ? {...item, quantity: item.quantity + 1}
                    : item
            );

        case "DECREASE_QUANTITY":
            return state
                .map((item) =>
                    item.id === action.payload
                        ? {...item, quantity: item.quantity - 1}
                        : item
                )
                .filter((item) => item.quantity > 0) //if quantity is 0 we remove item

        case "REMOVE_ITEM":
            return state.filter((item) => item.id !== action.payload);

        default:
            return state;

    }
};
export {cartReducer, initialStateFunction}