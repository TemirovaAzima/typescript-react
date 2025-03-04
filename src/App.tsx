
import Bird from "./components/Bird.tsx";


const App = () => {
    return (
        <div>
           <Bird
               species={"Dog"}
               canFly={false}/>
        </div>
    )
}
export default App
