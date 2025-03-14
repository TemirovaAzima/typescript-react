import React from 'react'
import {NameProp} from "../App.tsx";
import ComponentC from "./ComponentC.tsx";

const ComponentB: React.FC<NameProp>= ({name}) => {

    return (
        <div>
            <ComponentC name={name} />
        </div>
    )
}
export default ComponentB
