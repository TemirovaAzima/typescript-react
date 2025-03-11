import {JSX} from "react";


const Weather = ({temperature}: {temperature: number}): JSX.Element => {
    if(temperature< 15){
        return <h1>So cold outside</h1>
    }else if(temperature>15 && temperature<25){
        return <h1>Good weather</h1>
    }else if(temperature>25 ) {
        return <h1>So hot</h1>
}

    return (
        <div>
            <h1>Weather</h1>
        </div>
    )
}
export default Weather


