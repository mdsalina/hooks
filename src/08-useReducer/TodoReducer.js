export const TodoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload]
        case 'delete':
            return state.filter(todo => todo.id !== action.payload) //payload es el id del todo a borrar
        case 'toggle': 
            return state.map(todo => (todo.id === action.payload) ? { ...todo, done: !todo.done } : todo) //camabiar el done del todo que tenga el id que se pasa en el payload
        default:
            return state
    }
}