import { Link, NavLink } from "react-router-dom"


export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">useContext</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>  {/*activeClassName es una clase de css se activa solo si el nav esta activo*/}
            <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
            <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
        </ul>
        </div>
    </div>
    </nav>
  )
}
