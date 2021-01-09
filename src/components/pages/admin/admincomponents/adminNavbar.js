import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";

function ListItemLink({ to, navName }) {
    return (
      <Route
        path={to}
        children={({ match }) => (
          <li className={match ? "active" : ""}>
            <Link className="nav-link link-dark-background pl-0" to={to}>{navName}</Link>
          </li>
        )}
      />
    );
  }

class AdminNavbar extends Component {
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
        <section className="shadow-sm border-right border-dark bg-dark px-3 pt-3 text-left">
            <a href="/admin" className="h3 text-white mb-5 d-block link-unstyled">Gymshop backend</a>
            <span className="h5 text-light mb-2 d-block">Manage catalog</span>
            <ul className="list-unstyled ">
                <ListItemLink to="/admin/products" navName="Product management"/>
                <ListItemLink to="/admin/categories" navName="Category management"/>
            </ul>
        </section>
    );
  }
}

export default AdminNavbar;