import { useRef } from "react"

export const FocusScreen = () => {

  const inputRef = useRef()   //esto queda linkeado al input o cualquier elemento que se le asigne

  const onClick = () => {
    //document.querySelector('input').select(); //esto haria, pero trae problemas para muchos inputs
    inputRef.current.select(); //esto es mejor
  }


  return (
    <>
    <h1>Focus Screen</h1>
    <hr/>
    <input ref={inputRef} type="text" className="form-control mb-2" placeholder="Ingrese su nombre"/>
    <input type="text" className="form-control mb-2" placeholder="Ingrese su apellido"/>
    <input type="mail" className="form-control mb-2" placeholder="Ingrese su mail"/>

    <button onClick={onClick} className="btn btn-outline-primary mt-5">Focus</button>

    </>

    

  )
}
