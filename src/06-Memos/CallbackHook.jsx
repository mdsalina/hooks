import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setcounter] = useState(10)

    // Si defino la función de esta manera, se vuelve a generar la función cada vez que se renderiza el componente	
    //const incrementFadther = () => {
    //    setcounter(counter+1)
    //}

    // Si defino la función de esta manera, la función no se vuelve a generar cada vez que se renderiza el componente, lo siguiente estaria mal definido
    //const incrementFather = useCallback(() => {setcounter(counter+1)}, [],)
    
    // Si defino la función de esta manera, la función no se vuelve a generar cada vez que se renderiza el componente, lo siguiente estaria bien definido
    const incrementFather = useCallback((value) => {setcounter((c)=>c+value)}, [],)
 
  return (
    <>
        <h1>useCallback Hook: {counter}</h1>
        <hr/>
        <ShowIncrement increment={incrementFather}/>
    </>
  )
}
