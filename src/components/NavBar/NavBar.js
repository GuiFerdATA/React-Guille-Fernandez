function NavBar() {

    
    return (

        <header className="App-header">
            <nav>
                <h2>DataShoop</h2>
                <ul className="menu-principal">
                    <li><a href="-"> Inicio </a></li>
                    <li><a href="-">Nosotros</a></li>
                    <li><a href="-">Categorias</a>
                        <ul>
                            <li><a href="-">Contacto</a></li>
                            <li><a href="-">Envios</a></li>
                            <li><a href="-">Reclamos</a></li>
                        </ul>
                    </li>
                    <li><a href="-">Tienda</a></li>
                </ul>
            </nav>
        </header>

    );
}

export default NavBar;
