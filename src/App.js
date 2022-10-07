/* import Logo from './media/Logo.png'; */
import "./App.css";
import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from '../src/components/Products/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MyProvider from "./Context/CartContext";



function App() {
  return (
    <MyProvider>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Tienda online dataShop!" />} />

          <Route path="/category/:id" element={
            <ItemListContainer />
          }></Route>

          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>200:Pagina en construcción</h1>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </MyProvider>
  );
}

export default App;
