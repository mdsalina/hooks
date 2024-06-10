import { memo } from "react"


export const ShowIncrement = ({increment}) => {  //debo agregar memo para que no se vuelva a renderizar el componente, pero no me funciona

    console.log('Me volví a generar :(')

  return (
    <button onClick={()=>{increment(5)}} className="btn btn-primary">Incrementar</button>
  )
}

