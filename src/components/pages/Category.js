import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import axios from 'axios';
import { setup } from 'axios-cache-adapter'
import ProductBase from '../productBase'
import NavbarDefault from '../navbar';
import ErrorComponent from '../errorComponent';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catalog: [],
            catalogProducts: [],
            containsErrors: false
        }
    }

    componentDidMount() {  
        const api = axios.create({
        })
        api({
            url: `${process.env.REACT_APP_PRODUCT_API_BASE_URL}products/category/${this.props.match.params.mainCategory}/${this.props.match.params.subCategory}`,
            method: 'get'
        })
        .then(async (response) => {
            this.setState({
                catalog: response.data,
                catalogProducts: response.data.products
            })
        })
        .catch((error) => {
            // handle error
            this.setState({
                containsErrors: true
            }) 
        })
    }

    componentDidUpdate(prevProps) {
        if((prevProps.match.params.mainCategory !== this.props.match.params.mainCategory) || (prevProps.match.params.subCategory !== this.props.match.params.subCategory)){
            const api = axios.create({
            })
            api({
                url: `${process.env.REACT_APP_PRODUCT_API_BASE_URL}products/category/${this.props.match.params.mainCategory}/${this.props.match.params.subCategory}`,
                method: 'get'
            }).then(async (response) => {
              this.setState({
                  catalog: response.data,
                  catalogProducts: response.data.products
              })
            })
        }

    }

    render() {
        if(this.state.containsErrors == true) {
            return (
                <div>
                <NavbarDefault />
                <ErrorComponent />
                </div>
            )
        }
        return (
            <main>
                <NavbarDefault subcategoryname={this.props.match.params.mainCategory}/>
                <div className="container-fluid">
                    <h1>{this.state.catalog.name}</h1>
                    <div className="row">
                    {this.state.catalog.products?.map((product) =>
                        <ProductBase 
                        key={product.id}
                        id={product.id}
                        name={product.name} 
                        description={product.description} 
                        price={product.price}
                        mainCategory={this.props.match.params.mainCategory}
                        subCategory={this.props.match.params.subCategory}
                        />
                    )}
                    </div>
                </div>
            </main>
        );
    }
}

export default Category;