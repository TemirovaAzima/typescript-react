import React, {useId} from 'react'
const items: string[] = ["Apple","Banana","Orange"];
const App:React.FC = () => {
    const idPrefix = useId(); // Generates a unique prefix
    return (
        <div>
           <ul>
               {items.map((item,index)=>{
                   const id = `${idPrefix} -${index}`;
                   return <li key={id} id={id}>{item}</li>
               })}
           </ul>
        </div>
    );
};
export default App