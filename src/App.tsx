import ComponentA from "./components/ComponentA.tsx";
export interface NameProp {
    name: string;
}
const App =()=>{
    const name = "Azima"
    return(
        <div>
          <ComponentA name={name}/>
        </div>
    )
}
export default App;