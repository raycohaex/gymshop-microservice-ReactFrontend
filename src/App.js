import logo from './logo.svg';
import './App.css';
import Catalog from './components/catalog';
import Category from './components/pages/Category';
import FeaturedCategory from './components/pages/FeaturedCategory';
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
       <Switch>
          <Route path="/" component={Featured} exact />
          <Route path="/product/:id?" component={Product} />
          <Route path="/:mainCategory/:subCategory" render={(props) => <Category {...props}/> } />
          <Route path="/:mainCategory" render={(props) => <FeaturedCategory {...props}/> } />
          <Route component={Error} />
        </Switch>
       
    </main>
  );
}

export default App;
