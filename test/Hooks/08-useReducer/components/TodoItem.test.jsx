import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../../src/08-useReducer/components/TodoItem";

describe('Tests in TodoItem', () => {
    const todo = {
        id: 1,
        desc: 'Aprender React',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('debe de mostrar el Todo pendiente de completar', () => {

        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />);
        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe('align-self-center ')
        expect(spanElement.className).not.toContain('text-decoration-line-through') // no esta tachado

    })

    test('debe de mostrar el Todo completado', () => {
        todo.done = true; //completo la tarea

        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />);
        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through') //esta tachado
   
    })

    test('span debe llamar a onToggleTodo', () => {

        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />);
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

    })

    test('button debe llamar a onDeleteTodo', () => {

        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />);
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    })


})