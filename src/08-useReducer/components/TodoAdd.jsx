import { useState } from "react"
import { useForm } from "../../Hooks/useForm"

export const TodoAdd = ({onNewTodo}) => {

 
    const {description,onInputChange, onResetForm,}=useForm({
        description:''
    })

    const onFormSumit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewTodo(newTodo)
        onResetForm()

    }

  return (
    <form onSubmit={onFormSumit}>
        <input 
            type="text"
            name="description"
            placeholder="¿qué deseas hacer?"
            autoComplete="off"
            className="form-control"
            value={description}
            onChange={onInputChange}
        />
        <button type="submit" className="btn btn-outline-primary mt-1 btn-block" >
            Agregar
        </button>
    </form>
  )
}
