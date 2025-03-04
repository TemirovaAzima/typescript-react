interface Animal {
    readonly species: string,
}
interface Bird extends Animal{
    canFly: boolean;
}
interface BirdProp{
    peocock: Bird
}

const Bird = ({peocock}:BirdProp) => {
    return (
        <div>
            <h1>{peocock.species}</h1>
            <h1>{peocock.canFly}</h1>
        </div>
    )
}
export default Bird
