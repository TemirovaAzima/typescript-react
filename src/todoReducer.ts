type Todo = {
    id:number;
    text:string;
    completed:boolean;
}
// Define possible action types
type ActionProp =
    | {type: "ADD_TODO"; payload: string}
    | {type: "TOGGLE_TODO"; payload:number}
    | {type: "DELETE_TODO"; payload:number}

// Initial state function with strong typing
const initialStateFunction:()=>Todo[] = ()=>{
    return [
        {id:1,text:"Learn react",completed: false},
        {id:2,text:"practice useReducer",completed:false},
    ];
}

// Reducer function with strong typing
const todoReducer=(state:Todo[],action:ActionProp):Todo[]=>{
    switch(action.type){
        case "ADD_TODO":
            return [
                ...state,
                {id: Date.now(),text:action.payload,completed:false},
            ];
        case "TOGGLE_TODO":
            return state.map((todo)=>
                todo.id === action.payload ? {...todo,completed:!todo.completed} : todo
            );
        case "DELETE_TODO":
            return state.filter((todo)=>todo.id!==action.payload);
        default:
            return state;
    }
};
export {todoReducer, initialStateFunction}