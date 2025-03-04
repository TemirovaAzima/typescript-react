import Person from "./components/Person.tsx";


const App = () => {
     const person ={
         name: "Azima",
         greet(){
             return "hello kitty"
         }
     }

    return (
        <div>
            <Person person={person} />
        </div>
    )
}
export default App

