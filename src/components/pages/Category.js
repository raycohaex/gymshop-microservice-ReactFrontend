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
        let mainCategory = this.props.match.params.mainCategory;
        let subCategory = this.props.match.params.subCategory
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
                <NavbarDefault subcategoryname={mainCategory}/>
                <div className="container-fluid mt-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb m-0 pb-0">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item"><a href={"/catalog/" + mainCategory}>{mainCategory}</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{subCategory}</li>
                        </ol>
                    </nav>
                    <h1 className="text-left font-weight-bold h1 pl-3">{this.state.catalog.name}</h1>
                    <div className="row mt-5">
                        <div className="col-3 d-flex flex-column align-items-start p-4">
                            <span className="h4 text-left">Filters</span>
                        </div>
                        <div className="col-12 col-md-9">
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
                    </div>
                </div>
            </main>
        );
    }
}

export default Category;