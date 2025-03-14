import ComponentA from "./components/ComponentA.tsx";
import React, {createContext} from "react";
import {PersonProp} from "./type.ts";

export const DataName = createContext<string| undefined>(undefined);
export const DataAge = createContext<number | undefined>(undefined);
export const DataPerson = createContext<PersonProp| undefined>(undefined)
const App: React.FC =()=>{
    const name:string = "Azima"
    const age:number = 17
    const person ={
        name: "Jennie",
        age: 27,
        isSongOut: true
    }
    return(
            <DataName.Provider value={name}>
                <DataAge.Provider value={age}>
                    <DataPerson.Provider value={person}>
                        <ComponentA/>
                    </DataPerson.Provider>
                </DataAge.Provider>
            </DataName.Provider>

    )
}
export default App;