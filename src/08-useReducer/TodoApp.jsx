import { TodoList } from "./components/TodoList"
import { TodoAdd } from "./components/TodoAdd"
import { useTodo } from "../Hooks/useTodo"

export const TodoApp = () => {

 const {todos,todosCount, pendingTodosCount,handleNewTodo, handleDelete, handleOnToggleTodo} = useTodo()   //custom hook que maneja los todos (to do list)

  return (
    <>
        <h1>Lista Tareas: {todosCount} - <small>Pendientes:{pendingTodosCount}</small></h1>
        <hr/>
        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} onDeleteTodo={handleDelete} onToggleTodo={handleOnToggleTodo}/>
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr/>
                <TodoAdd onNewTodo={handleNewTodo}/>
            </div>
        </div>
    </>
  )
}
