import NumberList from './components/NumberList.tsx'
// the diffrence between readonly and as const is that u cant make change in both but the as const itself is a type for
// example 1,2,3 is a type 1 but when u write readonly the type is number or like other types but as const is like a literal type

const App = () => {
    const numbers = [1,2,3] as const;
    // numbers[0] =1 gives an error
    let firstNumber : number = numbers[0];

    return (
        <div>
           <NumberList numbers={numbers} firstNumber={firstNumber}/>
        </div>
    )
}
export default App
