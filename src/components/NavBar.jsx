
import Badge from '@mui/material/Badge';





import { NavLink } from "react-router-dom"




export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand" href="#">Carrito</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link active" aria-current="page" href="#">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" href="#">Compras</NavLink>
                        </li>

                    </ul>
                    <NavLink to='/carrito'>

                    <Badge badgeContent={4} color="secondary">
                    
                    
                    </Badge>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
