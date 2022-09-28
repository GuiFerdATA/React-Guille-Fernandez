/* import Logo from './media/Logo.png'; */
import "./App.css";
import NavBar from '../src/components/NavBar/NavBar';
/*import ItemListContainer from '../src/components/Products/ItemListContainer'*/
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {
  return (
    <div className="App">
      

        <NavBar />
      
      {/* <ItemListContainer greeting="¡Tienda online dataShop!" />*/}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
