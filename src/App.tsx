import NumberList from './components/NumberList.tsx'
// the diffrence between readonly and as const is that u cant make change in both but the as const itself is a type for
// example 1,2,3 is a type 1 but when u write readonly the type is number or like other types but as const is like a literal type

const App = () => {
     const person= {name: "Azima", age:17} as const;
     // person.age = "17"

    return (
        <div>
           <NumberList person={person} />
        </div>
    )
}
export default App
