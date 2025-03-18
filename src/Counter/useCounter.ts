import {useState} from "react";
type UseContextReturnType = {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}
export default function useCounter(initialValue: number = 0): UseContextReturnType {
    const [count, setCount] = useState<number>(initialValue);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(initialValue);

    return {count, increment, decrement, reset};
}