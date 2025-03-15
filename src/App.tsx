import React, {useId, useState} from 'react'

const App : React.FC= () => {
    const stableId = useState<string>(useId())[0]; //Wrapping it inside useState() ensures the ID
    // is generated only once and remains stable throughout the component's lifecycle.

    return (
        <p>My stable Id: {stableId}</p>
    )
}
export default App
