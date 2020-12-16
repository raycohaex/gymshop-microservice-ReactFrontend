import logo from './logo.svg';
import './App.css';
import Catalog from './components/catalog';
import NavbarDefault from './components/navbar';
import Category from './components/pages/Category';
import Featured from './components/pages/Featured';
import Error from './components/pages/Error';
import Product from './components/pages/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <main className="App">
       <NavbarDefault/>
       <Switch>
          <Route path="/product/:id?" component={Product} />
          <Route path="/featured/" component={Featured} />
          <Route path="/:mainCategory/:subCategory?" component={Category} />
          <Route component={Error} />
        </Switch>
       
    </main>
  );
}

export default App;
