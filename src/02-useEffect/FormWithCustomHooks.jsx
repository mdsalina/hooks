import { useEffect, useState } from "react"
import { Message } from "./Message"
import { useForm } from "../Hooks/useForm"

export const FormWithCustomHooks = () => {

    const {formState , onInputChange, onResetForm, username, email, password} = useForm({   
        username: '',
        email:'',
        password:''})

    //const {username, email, password} = formState

  return (
    <>
        <h1>Formulario con Custom Hook</h1>
        <hr />
        <input type="text" className="form-control mt-2" placeholder="userName" name="username" value={username} onChange={onInputChange}/>
        <input type="email" className="form-control mt-2" placeholder="minor@gmail.com" name="email" value={email} onChange={onInputChange}/>
        <input type="password" className="form-control mt-2" placeholder="contraseña" name="password" value={password} onChange={onInputChange}/>

        {username === 'Minor' && <Message/>}

        <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>

    </>
  )
}
