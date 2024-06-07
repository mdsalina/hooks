import { useState } from "react"

export const CounterApp = () => {

    const [counter, setCounter] = useState({  
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    const {counter1, counter2, counter3} = counter //desestructuramos el objeto counter

  return (
    <>
        <h1>CounterApp: {counter1}</h1>
        <h1>CounterApp: {counter2}</h1>
        <h1>CounterApp: {counter3}</h1>

        <hr />
        {/*una forma de modificar el counter*/}
        <button className="btn btn-primary" onClick={()=>setCounter({counter1: counter1 + 1,counter2:counter2, counter3:counter3})}>+1</button>
        {/*otra forma de hacerlo*/}
        <button className="btn btn-primary" onClick={()=>setCounter({counter2: counter2 + 1,counter1,counter3})}>+1</button> 
        {/*otra forma de hacerclo*/}
        <button className="btn btn-primary" onClick={()=>setCounter({...counter,counter3:counter3+1,})}>+1</button> 
    </>
  )
}
