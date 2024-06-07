import { useCounter } from "../Hooks/useCounter"


export const CounterWithCustomHook = () => {

    const {counter,increment,reset,decrement}=useCounter(10)

  return (
    <>
        <h1>Counter With Hook: {counter}</h1>
        <hr />
        <button className="btn btn-primary" onClick={()=>increment(2)}>+2</button> {/*ejemplo con input: increment(2) es el valor de incremento*/}
        <button className="btn btn-primary" onClick={reset}>Reset</button>
        <button className="btn btn-primary" onClick={decrement}>-1</button>
    </>
  )
}
