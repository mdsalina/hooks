import { TodoReducer } from "../../../src/08-useReducer/TodoReducer";

describe('Tests in todoReducer', () => {
    test('debe de retornar el estado por defecto', () => {

        const initialState = [{ id: 1, desc: 'Aprender React', done: false }];
        const state = TodoReducer(initialState, {});
        expect(state).toBe(initialState);

    })

    test('debe de agregar un TODO', () => {

        const initialState = [{ id: 1, desc: 'Aprender React', done: false }];
        const action = {
            type: 'add',
            payload: { id: 1, desc: 'ya aprendi React', done: false }
        }
        const state = TodoReducer(initialState, action);
        expect(state.length).toBe(2);
        expect(state).toContain(action.payload);

    })

    test('debe de borrar un TODO', () => {

        const initialState = [{ id: 1, desc: 'Aprender React', done: false }];
        const action = {
            type: 'delete',
            payload: 1
        }
        const state = TodoReducer(initialState, action);
        expect(state.length).toBe(0);
    })

    test('debe de hacer el toggle del TODO', () => {

        const initialState = [{ id: 1, desc: 'Aprender React', done: false }];
        const action = {
            type: 'toggle',
            payload: 1
        }
        const state = TodoReducer(initialState, action);
        const state2=TodoReducer(state,action);
        expect(state[0].done).toBe(true);
        expect(state2[0].done).toBe(false);
        

    })


})