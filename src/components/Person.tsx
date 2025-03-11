type Person = {
    name: string;
}

const Person = () => {
    const mixedArray: (string | number | Person)[]= ["Bob",2,{name: "Marv"}];
    mixedArray.forEach((item) => {
        if(typeof item === "string"){
            console.log("String:" , item.toUpperCase())
        } else if (typeof item === "number"){
            console.log("Number:", item*2)
        } else {
            console.log("Object Name:" , item.name)
        }
    })
    return (
        <div>

        </div>
    )
}
export default Person


