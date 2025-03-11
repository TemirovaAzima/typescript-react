import {JSX} from "react";

const Greeting = ({timeOfDay}: {timeOfDay: string}): JSX.Element => {
    return (timeOfDay === "Morning")?(
        <h1>Good Morning</h1>
    ): (
            <h1>Good afternoon</h1>)
}

export default Greeting
