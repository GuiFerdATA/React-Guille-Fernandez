/* import Logo from './media/Logo.png'; */
import "./App.css";
import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from '../src/components/Products/ItemListContainer'
import CartWidget from "./components/NavBar/CartWidget";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <CartWidget />
      </header>
      <ItemListContainer greeting="¡Tienda online dataShop!" />
    </div>
  );
}

export default App;
