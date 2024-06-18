import { render, screen } from "@testing-library/react"
import { MultipleCustomHook } from "../../../src/03-examples/MultipleCustomHook";
import { useCounter, useFetch } from "../../../src/Hooks";

jest.mock('../../../src/Hooks/useFetch'); // mockear el useFetch
jest.mock('../../../src/Hooks/useCounter'); // mockear el useCounter

describe('Tests in MultipleCustomHooks', () => {
    const mockIncrement= jest.fn();
    useCounter.mockReturnValue({
        counter:1,
        decrement:mockIncrement,
        increment:mockIncrement
    })

    beforeEach(()=>{
        jest.clearAllMocks();
    })  // antes de cada test limpiar los mocks

    // Simular el useFetch
    useFetch.mockReturnValue({
        data:null,
        hasError:false,
        isLoading:true
    })

    test('debe de mostrar el componente por defecto', () => {
        render(<MultipleCustomHook />);
        expect(screen.getByText('Información del Pokémon'))
        
        const nextButton=screen.getByRole('button',{name:'Siguiente'});
        expect(nextButton.disable).toBeFalsy(); // el boton esta habilitado

    })

    test('debe de mostrar a Pikachu', () => {
        useFetch.mockReturnValue({
            data:{name:"Pikachu",sprites:["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            ]},
            hasError:false,
            isLoading:false
        })
        
        render(<MultipleCustomHook />);
        expect(screen.findByText('Pikachu')).toBeTruthy();

    })

    test('debe cambiar de pokemon', () => {

        useFetch.mockReturnValue({
            data:{name:"Raychu",sprites:["id1.png","id2.png"]},
            hasError:false,
            isLoading:false
        })   

        render(<MultipleCustomHook />);
        const nextButton=screen.getByRole('button',{name:'Siguiente'});
        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalled();
    
    })

})