/* import Logo from './media/Logo.png'; */
import "./App.css";
import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from '../src/components/Products/ItemListContainer'  




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
     <ItemListContainer />
     
    </div>
  );
}

export default App;
