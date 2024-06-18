import { render,screen } from "@testing-library/react"
import { TodoApp } from "../../../src/08-useReducer/TodoApp"
import { useTodo } from "../../../src/Hooks/useTodo"

jest.mock('../../../src/Hooks/useTodo')

describe('Pruebas en <TodoApp />', () => {
            //mock de useTodo, retorna los valores que se esperan
    useTodo.mockReturnValue({
        todos: [
            {id: 1, description: 'Aprender React', done: false},
            {id: 2, description: 'Aprender Mongo', done: false}
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleNewTodo: jest.fn(),
        handleDelete: jest.fn(),
        handleOnToggleTodo: jest.fn()
    })
    
    test('debe de mostrarse correctamente', () => {

        render(<TodoApp/>)
        expect(screen.getByText('Aprender React')).toBeTruthy()
        expect(screen.getByText('Aprender Mongo')).toBeTruthy()
        expect(screen.getByRole('textbox')).toBeTruthy()


    })


})