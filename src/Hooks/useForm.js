import { useState } from "react"

export const useForm = (initialForm={}) => {

    //initialForm es un objeto que se le pasa como argumento
    //{   Username: '',
    //    email:'',
    //    password:''}

    const [formState, setfromState] = useState(initialForm)


    //funcion que actualiza el iput
    const onInputChange = ({target}) => {
        const {name, value} = target
        setfromState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setfromState(initialForm)
    }

    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
