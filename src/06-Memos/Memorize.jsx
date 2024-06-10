import { useState } from "react"
import { useCounter } from "../Hooks"
import { Small } from "./Small"



export const Memorize = () => {

const {counter, increment}=useCounter(10)
const [show, setShow] = useState()

  return (
    <>  
        <h1>Counter: <Small value={counter}/></h1>
        <hr/>
        <button onClick={()=>increment()} className="btn btn-primary">+1</button>
        <button onClick={()=>setShow(!show)} className="btn btn-primary">show/Hide {JSON.stringify(show)}</button>
        
    </>
  )
}
