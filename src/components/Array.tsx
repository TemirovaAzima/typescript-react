
const Array = ({numbers, firstNumber}: {numbers: readonly number[]; firstNumber: number}) => {
    return (
        <div>
            {numbers.map((number) => (
                <h1>{number}</h1>
            ))}
            {firstNumber}
        </div>
    )
}
export default Array
