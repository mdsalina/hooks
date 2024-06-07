import { useEffect, useState } from "react"

export const Message = () => {

const [coords, setcoords] = useState({x:0,y:0})

useEffect(() => {//Se ejecuta cuando el componente se monta



    const onMouseMove = ({x,y}) => {
        setcoords({x,y})
    }

    window.addEventListener('mousemove', onMouseMove)  //Se ejecuta cada vez que se mueve el mouse

  return () => { //Se ejecuta cuando el componente se desmonta
    window.removeEventListener('mousemove', onMouseMove) //Se ejecuta cada vez que se desmonta el componente, el removeEventListener se debe hacer por referencia
  }
}, [])


  return (
    <>
        <h1>Usuario ya existe</h1>
        <p>Coordenadas del mouse:</p>
        {JSON.stringify(coords)}
    </>
  )
}
