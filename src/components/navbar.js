import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import axios from 'axios';
import { setup } from 'axios-cache-adapter'
import NavbarSubmenu from './navbarSubmenu';

function ListItemLink({ to, navName }) {
    return (
      <Route
        path={to}
        children={({ match }) => (
          <li className={match ? "active" : ""}>
            <Link className="nav-link" to={to}>{navName}</Link>
          </li>
        )}
      />
    );
  }

class NavbarDefault extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subcategoryname: "",
            categories: []
        }
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }





  render() {
    return (
        <header className="shadow-sm border-bottom border-dark">
            <div className="alert alert-warning alert-dismissible fade show m-0" role="alert">
                This is not a real webshop, it's a demo project.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <nav className="navbar navbar-expand-md navbar-light py-4">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav mr-auto">
                    <ListItemLink to="/catalog/supplements" navName="Supplements"/>
                    <ListItemLink to="/catalog/accessories" navName="Accessories"/>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Clothing
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <ul>
                                <ListItemLink to="/catalog/men" navName="Men"/>
                                <ListItemLink to="/catalog/women" navName="Women"/>
                                <ListItemLink to="/catalog/unisex" navName="Unisex"/>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mx-auto order-0">
                    <a className="navbar-brand mx-auto" href="#">
                        <img id="site-logo" src={process.env.PUBLIC_URL + '/sitelogo.svg'} />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></a>
                        </li>
                    </ul>
                </div>
            </nav>
            {this.props.subcategoryname ? (
                <NavbarSubmenu category={this.props.subcategoryname} useActive={this.props.useActive}/>
            ) : (
                <div style={{display: 'none'}}></div>
            )}
            
        </header>
    );
  }
}

export default NavbarDefault;