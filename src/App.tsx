
import UserStatus from "./components/UserStatus.tsx";


const App = () => {
    return (
        <div>
            <UserStatus loggedIn={true} isAdmin={true}/>
        </div>
    )
}
export default App
