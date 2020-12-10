import logo from './logo.svg';
import './App.css';
import Catalog from './components/catalog';
import NavbarDefault from './components/navbar';
import Category from './components/pages/Category';
import Featured from './components/pages/Featured';
import Error from './components/pages/Error';
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
          <Route path="/supplements/:subCategory?" component={Category} />
          <Route path="/accessories/:subCategory?" component={Category} />
          <Route path="/clothing/men/:subCategory?" component={Category} />
          <Route path="/clothing/women/:subCategory?" component={Category} />
          <Route path="/clothing/unisex/:subCategory?" component={Category} />

          <Route path="/featured/" component={Featured} />
          <Route component={Error} />
        </Switch>
       
    </main>
  );
}

export default App;
