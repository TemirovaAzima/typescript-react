
import ComponentB from "./ComponentB.tsx";
import {NameProp} from "../App.tsx";

const ComponentA= ({name} : NameProp) => {
    return (
        <div>
            <ComponentB name={name}/>
        </div>
    )
}
export default ComponentA
