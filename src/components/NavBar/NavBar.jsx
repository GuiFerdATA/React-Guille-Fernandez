import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
function NavBar() {

    return (

        <header className="App-header">
            <nav>
                <h2>DataShoop</h2>
                <ul className="menu-principal">
                    <li><Link to="/"> Inicio </Link></li>
                    <li><Link to="/category/Nosotros">Nosotros</Link></li>
                    <li className="Categ">Categorias
                        <ul>
                            <li><Link to="/category/Contacto">Contacto</Link></li>
                            <li><Link to="/category/Envios">Envios</Link></li>
                            <li><Link to="/category/Reclamos">Reclamos</Link></li>
                        </ul>
                    </li>
                    <li> <CartWidget /></li>
                </ul>
            </nav>
        </header>
        

    );
}

export default NavBar;
