import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import axios from 'axios';
import { setup } from 'axios-cache-adapter'
import ProductBase from '../productBase'

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catalog: []
        }
    }

    componentDidMount() {  
        const api = axios.create({
        })
        
        api({
            url: `${process.env.REACT_APP_PRODUCT_API_BASE_URL}products/category/${this.props.match.params.subCategory}`,
            method: 'get'
        }).then(async (response) => {
            console.log(response);
          this.setState({
              catalog: response.data
          })
        })
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <div className="container-fluid">
                {this.state.catalog.map((item, index) =>
                <main key={index}>
                    <div><h1>{item.name}</h1></div>
                    <div className="row">
                        {item.products.map((product) =>
                        <ProductBase 
                        key={product.id}
                        id={product.id}
                        name={product.name} 
                        description={product.description} 
                        price={product.price}
                        />
                    )}
                    </div>

                </main>
                )}
            </div>
        );
    }
}

export default Category;