import { useEffect, useState } from "react"


const localCache= {}


export const useFetch = (url) => {
    
    const [state, setstate] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,

    })

    

    useEffect(() => {
       getFetch()
    }, [url])

    const setLoadingState = () => {
        setstate({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        })
    }
   

    const getFetch= async() => {

        // Si ya se ha hecho la petición, no la vuelvas a hacer
        if(localCache[url]){
            setstate({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null,
            })
            return
        }


        setLoadingState()
         const resp = await fetch(url) 
         //sleep
        await new Promise(resolve => setTimeout(resolve, 100))

         if(!resp.ok){   //si la respuesta no es correcta o falla
             setstate({
                 data: null,
                 isLoading: false,
                 hasError: true,
                 error: {
                        status: resp.status,
                        statusText: !resp.statusText
                    }
                 }) 
                 return
                };
                

         const data = await resp.json()

            setstate({
                data: data,
                isLoading: false,
                hasError: false,
                error: null,
            })

            localCache[url]=data
    }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,

  }
}
