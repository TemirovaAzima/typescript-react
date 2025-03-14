import React, {useContext} from 'react'
import {DataName, DataAge, DataPerson} from '../App.tsx'

const ComponentC: React.FC = () => {
    const userName = useContext(DataName);
    const userAge = useContext(DataAge);
    const userPerson = useContext(DataPerson);

    return (
        <div>
            <h1>Name:{userName ?? "No name provided"}</h1>
            <h1>Age:{userAge ?? "No age provided"}</h1>
            {userPerson ? (
                <h1>Name: {userPerson.name}. Age: {userPerson.age}. is Song out: {userPerson.isSongOut? "Yes" : "No"}</h1>
            ) : (
                <p>No person found </p>
            )}
        </div>
    )
}
export default ComponentC
