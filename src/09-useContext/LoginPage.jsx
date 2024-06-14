import { useContext } from "react"
import { UserContext } from "./context/userContex";

export const LoginPage = () => {

  const {user,setUser}=useContext(UserContext);


    return (
      <>
          <h1>LoginPage</h1>
          <hr/>
          <pre>
              {JSON.stringify(user,null,3)}
          </pre>
          <button onClick={()=>setUser({id:123,name:"Minor",email:"minor@gmail.com"})} className="btn btn-primary">Set user</button>
      </>
    )
  }
  