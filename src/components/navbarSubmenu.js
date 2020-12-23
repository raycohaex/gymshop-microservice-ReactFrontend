import React, { Component } from 'react';
import axios from 'axios';
import { setup } from 'axios-cache-adapter'
import { Link, Route } from "react-router-dom";

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

class NavbarSubmenu extends Component {
    constructor(props) {
    super(props);
    this.state = {
        loading: false,
        categories: [],
        categoryname: "",
        data: []
    }
    }

    componentDidMount() {
        const api = axios.create({
        })
        
        api({
            url: `${process.env.REACT_APP_PRODUCT_API_BASE_URL}categories/${this.props.category}`,
            method: 'get'
        }).then(async (response) => {
          this.setState({
              categories: response.data.categories,
              categoryname: response.data.name
          })
        })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.category !== this.props.category){
            const api = axios.create({
            })
            
            api({
                url: `${process.env.REACT_APP_PRODUCT_API_BASE_URL}categories/${this.props.category}`,
                method: 'get'
            }).then(async (response) => {
              this.setState({
                  categories: response.data.categories,
                  categoryname: response.data.name
              })
            })
        }
    }


    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light py-1">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav mr-auto">
                        {(this.state.categories && this.state.categories.length > 0) && this.state.categories.map((_) =>
                            <ListItemLink to={"/" + this.state.categoryname + "/" + _.name} navName={_.name}/>
                        )}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavbarSubmenu;