import Bird from "./components/Bird.tsx";
const App = () => {
    const peocock ={
        species: "Peacock",
        canFly: false,
    }

    return (
        <div>
            <Bird peocock={peocock} />
        </div>
    )
}
export default App

