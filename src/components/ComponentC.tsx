import React from 'react'
import {NameProp} from "../App.tsx";

const ComponentC :React.FC<NameProp> = ({name}) => {
    return (
        <div>
            {name}
        </div>
    )
}
export default ComponentC
