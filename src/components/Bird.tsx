interface Animal {
    species: string;
}
interface Bird {
    canFly: boolean;
}
type Pet = Animal & Bird;
const Bird = ({species, canFly} : Pet) => {
    return (
        <div>
          Species: {species}
          <p> Can fly: {canFly ? "Yes" : "No"}</p>
        </div>
    )
}
export default Bird
