import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/Hooks/useForm";

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Minor',
        email: 'minor@gmail.com'
    }

    test('debe de regresar los valores por defecto', () => {
        const{result}=renderHook(()=>useForm(initialForm));
        console.log(result.current);
        expect(result.current).toEqual(
            {name:initialForm.name,
                email:initialForm.email,
                formState:initialForm, 
                onInputChange:expect.any(Function),
                onResetForm:expect.any(Function)});
    })

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        const{result}=renderHook(()=>useForm(initialForm));
        const newName='Juan';
        act(()=>{
            result.current.onInputChange({target:{name:'name', value:newName}});
        })
        expect(result.current.name).toEqual(newName);
        expect(result.current.formState.name).toEqual(newName);
    })

    test('debe de re-establecer el formulario con RESET', () => {
        const{result}=renderHook(()=>useForm(initialForm));
        const newName='Juan';
        act(()=>{
            result.current.onInputChange({target:{name:'name', value:newName}});
            result.current.onResetForm();
        })
        expect(result.current.name).toEqual(initialForm.name);
        expect(result.current.formState.name).toEqual(initialForm.name);
    })

})