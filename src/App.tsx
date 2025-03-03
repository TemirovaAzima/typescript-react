import Button from "./components/Button.tsx";

const App =()=>{

    return(
        <div>
           <Button clickFirst={"Click me"}  clicked={"Clicked"} disabled={false}/>
        </div>
    )
}
export default App