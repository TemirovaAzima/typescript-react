import Employee from "./components/Employee.tsx";


const App = () => {

    const employee={
        name: "Azima",
        age: 30,
        email: "azima@example.com",
        phone: "123-456-789",
        company: "Tech Corp",
    }
    return (
        <div>
            <Employee employee={employee} />
        </div>
    )
}
export default App

