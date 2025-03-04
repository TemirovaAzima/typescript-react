import Array from './components/Array.tsx'

const App = () => {
    const numbers : readonly number[]=[1,2,3]
    // numbers[0] = 10 give an error
    let firstNumber : number = numbers[0]
    return (
        <div>
           <Array numbers={numbers} firstNumber={firstNumber}/>
        </div>
    )
}
export default App
