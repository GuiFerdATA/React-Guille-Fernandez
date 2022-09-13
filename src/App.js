/* import logo from './ejemplo.svg';  ACA IMPORTAMOS EL LOGO*/
import "./App.css";
import './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';

function App() {

  /*  */

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tienda Online</h1>
      </header>
      <NavBar />

    </div>
  );
}

export default App;
