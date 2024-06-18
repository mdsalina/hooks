import { fireEvent,render, screen } from "@testing-library/react"
import { UserContext } from "../../../src/09-useContext/context/userContex"
import { LoginPage } from "../../../src/09-useContext/LoginPage"



describe('Pruebas en LoginPage', () => {


    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{user:null}}>
                <LoginPage/>
            </UserContext.Provider>
        )

        const pretag = screen.getByLabelText('pre')
        expect(pretag.innerHTML).toBe('null')


    })

    test('debe de llamar al setUser cuando se hace click en el boton', () => {

        const setUserMock= jest.fn()
        render(
            <UserContext.Provider value={{user:null,setUser:setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        )
 
        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(setUserMock).toHaveBeenCalledWith({id:123,name:"Minor",email:"minor@gmail.com"})

    })


})