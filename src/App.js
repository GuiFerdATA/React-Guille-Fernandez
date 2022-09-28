/* import Logo from './media/Logo.png'; */
import "./App.css";
import NavBar from '../src/components/NavBar/NavBar';
/*import ItemListContainer from '../src/components/Products/ItemListContainer'*/
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
/*import { BrowserRouter, Routes, Route } from "react-router-dom";*/



function App() {
  return (
    /*<BrowserRouter>*/
    <div className="App">
      <NavBar />
      {/*<Routes>*/}
      {/* <ItemListContainer greeting="¡Tienda online dataShop!" />*/}
      <ItemDetailContainer />
      {/*</Routes>*/}
    </div>
    /*</BrowserRouter>*/
    );
}

export default App;
