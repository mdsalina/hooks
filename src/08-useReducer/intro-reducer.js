
const initialState = [{
    id: 1,
    todo: 'Recolectar piedras del alma',
    done: false
}]

// siquiero agrear un nuevo "todo", es tentador hacer lo siguiente
// initialState.push({
//id:2,
//todo: "recolectar piedra del poder",
//done:false}) // no se debe hacer esto, esto porque muta el estado y no se vuelven a renderizar los componentes



const todoReducer = (state = initialState, action) => {
    if (action?.type === 'add') {
        return [...state, action.payload]
    }

    return state
}


let todos = todoReducer()
console.log(todos)

// mejor hacerlo asi
const newTodo = {
    id:2,
    todo: "recolectar piedra del poder",
    done:false}

const AddTodoAction = {
    type: 'add',
    payload: newTodo
}
todos = todoReducer(initialState, AddTodoAction);

console.log(todos) // [{id:1, todo: 'Recolectar piedras del alma', done: false}, {id:2, todo: 'recolectar piedra del poder', done: false}]