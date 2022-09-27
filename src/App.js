/* import Logo from './media/Logo.png'; */
import "./App.css";
import NavBar from '../src/components/NavBar/NavBar';
/*import ItemListContainer from '../src/components/Products/ItemListContainer'*/
import CartWidget from "./components/NavBar/CartWidget";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <CartWidget />
      </header>
      {/* <ItemListContainer greeting="¡Tienda online dataShop!" />*/}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
