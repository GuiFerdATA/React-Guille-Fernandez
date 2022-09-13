import Logo from './media/Logo.png'; 
import "./App.css";
import './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';

function App() {

  /*  */

  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo}  className="App-logo" alt="logo"/>
        <h1>Tienda Online</h1>
      </header>
      <NavBar />

    </div>
  );
}

export default App;
