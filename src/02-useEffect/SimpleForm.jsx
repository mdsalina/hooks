import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [fromState, setfromState] = useState({
        Username: '',
        email:''
    })

    const {Username, email} = fromState

    //funcion que actualiza el iput
    const onInputChange = ({target}) => {
        const {name, value} = target
        setfromState({
            ...fromState,
            [name]: value
        })
    }

    //UseEffect sirve para disparar efectos secundarios
    //En el segundo argumento: si se deja vacio se ejecuta una sola vez, si se pone una variable se ejecuta cada vez que cambie la variable, 
    //si no se pone nada se ejecuta cada vez que se renderiza el componente (es decir cada vez que algo se modifica en el componente)


    //Se dispara cada vez que se renderiza el componente (es decir cuado cualquier cosa cambia en el componente)
    //useEffect(() => {   
        //console.log('Se renderizo el componente')
    //}) 

    //Se dispara una sola vez al renderizar el componente por primera vez
    //useEffect(() => {   
        //console.log('Se renderizo el componente por primera vez')
    //}, [])  

     //Se dispara solo cuando se modifica el Username
    //useEffect(() => {   
        //console.log('Se modifico Username')
    //}, [Username])  
    
    //Se dispara solo cuando se modifica el email
    //useEffect(() => {   
    //    console.log('Se modifico el email')
    //}, [email])  

    //UseEffect puede retornar una funcion que se ejecuta cuando el componente se desmonta
    

  return (
    <>
        <h1>Simple Form</h1>
        <hr />
        <input type="text" className="form-control mt-2" placeholder="UserName" name="Username" value={Username} onChange={onInputChange}/>
        <input type="email" className="form-control mt-2" placeholder="minor@gmail.com" name="email" value={email} onChange={onInputChange}/>

        {Username === 'Minor' && <Message/>}

    </>
  )
}
