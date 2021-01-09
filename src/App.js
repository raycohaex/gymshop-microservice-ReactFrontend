import logo from './logo.svg';
import './App.css';
import Catalog from './components/catalog';
import Category from './components/pages/Category';
import FeaturedCategory from './components/pages/FeaturedCategory';
import Featured from './components/pages/Featured';
import Error from './components/pages/Error';
import Product from './components/pages/Product';
import AdminMain from './components/pages/admin/AdminMain';
import AdminProduct from './components/pages/admin/AdminProduct';
import AdminCategory from './components/pages/admin/AdminCategory';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <main className="App">
      <Router>
       <Switch>
          {/* public routes */}
          <Route path="/" component={Featured} exact />
          <Route path="/product/:id/:productTitle?" render={(props) => <Product {...props}/> } />
          <Route path="/catalog/:mainCategory/:subCategory" render={(props) => <Category {...props}/> } />
          <Route path="/catalog/:mainCategory" render={(props) => <FeaturedCategory {...props}/> } />
          <Route path="/catalog" component={Featured} />

          {/* user protected routes */}

          {/* admin protected routes */}
          <Route path="/admin/products" render={(props) => <AdminProduct {...props}/> } />
          <Route path="/admin/categories" render={(props) => <AdminCategory {...props}/> } />
          <Route path="/admin" render={(props) => <AdminMain {...props}/> } />

          <Route component={Error} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
