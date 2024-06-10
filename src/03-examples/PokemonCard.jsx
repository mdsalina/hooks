import { useLayoutEffect, useRef } from "react"

export const PokemonCard = ({id, name, sprites=[]}) => {

  const pRef=useRef()

  // hook que se ejecuta despues de que se renderiza el componente, como ejemplo lo uso para ver las dimensiones del div
  useLayoutEffect(() => {
    console.log(pRef.current.getBoundingClientRect()) // para ver las dimensiones del div
  }, [PokemonCard])  // puede ser vacio tambien


  return (
    <section style={{height: 200}}>
        <h2 className="text-capitalize">#{id}-{name}</h2>

        <div ref={pRef} className="d-flex justify-content-center">
            {sprites.map(sprite=>(
                <img key={sprite} src={sprite} alt={name}/>
            ))
            }
        </div>

    </section>
  )
}
