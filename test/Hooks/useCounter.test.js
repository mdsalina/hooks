import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/Hooks/useCounter";

describe('Pruebas en el hook useCounter', () => {

    const initialValue = 100;

    test('Debe retornar valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;
        expect(counter).toBe(10);
        expect(increment).toEqual(expect.any(Function));
        expect(typeof decrement).toBe('function'); //Otra forma de hacerlo
        expect(typeof reset).toBe('function');
    });

    test('Debe retornar el valor enviado', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);
    });

    test('Debe incrementar el counter en 1', () => {
        const { result } = renderHook(() => useCounter(initialValue));
        const { counter, increment } = result.current;

        act(() => {  //Para poder ejecutar funciones
        increment();})

        expect(result.current.counter).toBe(initialValue + 1); //si hubiera usado solo el counter arrojaría error, porque no se actualiza el valor el valor del counter, si no que el del result.current.counter
    });

    test('Debe decrementar el counter en 1', () => {
        const { result } = renderHook(() => useCounter(initialValue));
        const { counter, decrement } = result.current;

        act(() => {
            decrement();
        })

        expect(result.current.counter).toBe(initialValue - 1);
    });

    test('Debe resetear el counter', () => {
        const { result } = renderHook(() => useCounter(initialValue));
        const { counter, reset, increment } = result.current;

        act(() => {
            increment();
            reset();
        })

        expect(result.current.counter).toBe(initialValue);
    });

    

});
