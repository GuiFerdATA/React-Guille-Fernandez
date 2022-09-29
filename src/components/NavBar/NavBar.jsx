import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
function NavBar() {

    return (

        <header className="App-header">
            <nav>
                <h2>DataShoop</h2>
                <ul className="menu-principal">
                    <li><Link to="/"> Inicio </Link></li>
                    <li><Link to="-">Nosotros</Link></li>
                    <li><Link to="-">Categorias</Link>
                        <ul>
                            <li><Link to="-">Contacto</Link></li>
                            <li><Link to="-">Envios</Link></li>
                            <li><Link to="-">Reclamos</Link></li>
                        </ul>
                    </li>
                    <li> <CartWidget /></li>
                </ul>
            </nav>
        </header>
        

    );
}

export default NavBar;
