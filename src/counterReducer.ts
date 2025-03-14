// define the state type
type initialStateProp = {
    count: number
}
// define action types with payload support
type ActionType=
    | {type:"increment"}
    | {type:"decrement"}
    | {type:"incrementByAmount"; payload:number}
    | {type:"decrementByAmount";payload:number};

//Initial state with strict typing
const initialState:initialStateProp= {count:0};

// Reducer function with TypeScript Types
function counterReducer(state:initialStateProp,action:ActionType):initialStateProp{
     switch(action.type){
         case "increment":
             return {count: state.count+1};
         case "decrement":
             return state.count >0 ? {count: state.count-1} :state
         case "incrementByAmount":
             return {count: state.count + action.payload};
         case "decrementByAmount":
             return state.count -action.payload >= 0
                  ? {count: state.count -action.payload}
                  : {count: 0}
         default:
             return state;
     }
}
export {initialState,counterReducer};