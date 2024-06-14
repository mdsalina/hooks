import { Navigate, Route, Routes, Link } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { NavBar } from "./NavBar"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
  return (
    <UserProvider> {/*Componente generado por mi. Se envuelve todo en el provider para que todos los componentes tengan acceso a la informacion del provider*/}
        <h1>MainApp</h1>
        {/*}
        <a href="/">Home </a>
        <a href="/about">About </a>
        <a href="/login">Login </a>*/} {/*This is the old way of doing it.*/}

        {/*}
        <Link to="/">Home </Link>
        <Link to="about">About </Link>
        <Link to="login">Login </Link> */} {/*This is the new way of doing it.*/}
                                       {/*link se traducen como <a></a>, se pueden usar css con etiquetas "a"*/}

        <NavBar/>
        <hr/>
        
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="login" element={<LoginPage />} />
            {/*<Route path="*" element={<h1>404 Not Found</h1>} />*/}
            <Route path="*" element={<Navigate to="/"/>} />


        </Routes>
    </UserProvider>
  )
}
