
export const TodoItem = ({todo, onDeleteTodo,onToggleTodo}) => {



  return (
    <li className="list-group-item d-flex justify-content-between">
        <span className={`align-self-center ${(todo.done) ? 'text-decoration-line-through':''}`} onClick={()=>onToggleTodo(todo.id)} aria-label="span">{todo.description}</span> {/*el doble click es para completar la tarea, se agrega clase condicional de tachado*/}
        <button className="btn btn-danger" onClick={()=>onDeleteTodo(todo.id)}>Borrar</button>
    </li>
  )
}
