import { render, screen } from "@testing-library/react"
import { HomePage } from "../../../src/09-useContext/HomePage"
import { UserContext } from "../../../src/09-useContext/context/userContex"

describe('Pruebas en HomePage', () => {
    const user2 = {
        id:1,
        name: 'Minor',
        }

    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{user:null}}>
                <HomePage/>
            </UserContext.Provider>
        )

        const pretag = screen.getByLabelText('pre')
        expect(pretag.innerHTML).toBe('null')

    })

    test('debe de mostrar el componente con el usuario', () => {

        render(
            <UserContext.Provider value={{user:user2}}>
                <HomePage/>
            </UserContext.Provider>
        )
        const pretag = screen.getByLabelText('pre')
        expect(pretag.innerHTML).toContain(user2.name)
        expect(pretag.innerHTML).toContain(user2.id.toString())
    })

})