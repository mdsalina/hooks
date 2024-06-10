import { useMemo, useState } from "react"
import { useCounter } from "../Hooks"


const heavyStuff=(iterations)=>{
    for(let i=0;i<iterations;i++){
        console.log('Iterating...')
    }
    return `${iterations} iterations done`
}

export const MemoHook = () => {

const {counter, increment}=useCounter(4000)
const [show, setShow] = useState()

const memorizedValue=useMemo(() => heavyStuff(counter), [counter]) //solo se ejecuta la función heavyStuff cuando el counter cambia

  return (
    <>  
        <h1>Counter: <small>{counter}</small></h1>
        <hr/>
        <h4>{memorizedValue}</h4>
        <button onClick={()=>increment()} className="btn btn-primary">+1</button> 
        <button onClick={()=>setShow(!show)} className="btn btn-primary">show/Hide {JSON.stringify(show)}</button>{/*cada vez que se presiona el botón se ejecuta la función heavyStuff, siendo que el counter no cambia, no quiero que eso ocurra*/}
    </>
  )
}
