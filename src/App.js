import logo from './logo.svg';
import './App.css';
import Catalog from './components/catalog';
import NavbarDefault from './components/navbar';

function App() {
  return (
    <div className="App">
       <NavbarDefault/>
       <Catalog/>
    </div>
  );
}

export default App;
