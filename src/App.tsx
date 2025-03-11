import Greeting from "./components/Greeting.tsx";
import {JSX} from "react";


const App = (): JSX.Element => {
    return (
        <div>
          <Greeting timeOfDay={"morning"}/>
        </div>
    )
}
export default App
