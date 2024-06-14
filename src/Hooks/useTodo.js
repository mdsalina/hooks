import { useEffect, useReducer, useState } from "react"
import { TodoReducer } from "../08-useReducer/TodoReducer"

//inicializar los todos con lo que haya en localstorage
const init = () => JSON.parse(localStorage.getItem('todos')) || [];


export const useTodo = () => {

    //crear el reducer
    const [todos, dispatch] = useReducer(TodoReducer, [], init)

    //guardar en localstorage los todos cada vez que cambian
    useEffect(() => {localStorage.setItem('todos', JSON.stringify(todos))}, [todos])
      
    //agregar un nuevo todo
    const handleNewTodo = (newTodo) => {
        const action = {
            type: 'add',
            payload: newTodo
        }
        dispatch(action)
     }
    
    //borrar un todo
    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action)
    }
    
    
    //toggle de un todo
    const handleOnToggleTodo = (todoId) => {
        const action = {
            type: 'toggle',
            payload: todoId
        }
        dispatch(action)
    }
    
    //retornar los todos y las funciones para manejarlos
  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDelete,
    handleOnToggleTodo,
    }
}
