import { screen, render } from "@testing-library/react"
import { MainApp } from "../../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en MainApp', () => {

    test('debe de mostrar HomePage', () => {
        
        render(<MemoryRouter> <MainApp/> </MemoryRouter>)  //memoryRouter es un componente que se usa para hacer pruebas de rutas, simula un BrowserRouter
        expect(screen.getByText('HomePage')).toBeTruthy()
    
    })

    test('debe de mostrar LoginPage', () => {
        
        render(<MemoryRouter initialEntries={['/login']}> <MainApp/> </MemoryRouter>)  //memoryRouter es un componente que se usa para hacer pruebas de rutas, simula un BrowserRouter
        expect(screen.getByText('LoginPage')).toBeTruthy()
    
    })

})