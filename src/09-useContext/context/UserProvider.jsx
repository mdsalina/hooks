import { useState } from "react"
import { UserContext } from "./userContex"

//const user={	
//    id: 123,
//    name: 'Minor',
//    email: 'minor@gmail.com'
//}


//higer order component
export const UserProvider = ({children}) => {

    const [user, setUser] = useState()
    
  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}
