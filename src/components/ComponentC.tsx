import React from 'react'
import {DataAge, DataName, DataPerson} from '../App.tsx'

const ComponentC: React.FC = () => {
    return (
        <DataName.Consumer>
            {(name) => {
                return (
                    <DataAge.Consumer>
                        {(age) => {
                            return (
                                <DataPerson.Consumer>
                                    {(person) =>
                                        person ? (
                                            <div>
                                                <h1>{name ?? "No name provided"}</h1>
                                                <h1> {age ?? "No age provided"}</h1>
                                                <h1>{person.name}- {person.age} - {person.isSongOut ? "Yes" : "No"}</h1>
                                            </div>
                                        ) : (
                                            <h1>No person data</h1>
                                        )
                                    }
                                </DataPerson.Consumer>
                            )
                        }
                        }
                    </DataAge.Consumer>
                )
            }}
        </DataName.Consumer>
    )
}
export default ComponentC
