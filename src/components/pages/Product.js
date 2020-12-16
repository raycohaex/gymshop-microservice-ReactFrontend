import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import axios from 'axios';
import { setup } from 'axios-cache-adapter'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        }
    }

    componentDidMount() {  
        const api = axios.create({
        })
        
        api({
            url: `${process.env.REACT_APP_PRODUCT_API_BASE_URL}products/${this.props.match.params.id}`,
            method: 'get'
        }).then(async (response) => {
            console.log(response);
          this.setState({
              product: response.data
          })
        })
    }

    componentDidUpdate() {
    }


    render() {
        return (
            <main className="container-fluid">
                <div className="row"><div><button>Go Back</button></div></div>
                <div>product images here</div>
                <div class="product-page-info">
                    <h1 className="product-page-info-title">{this.state.product.name}</h1>
                </div>
            </main>
        );
    }
}

export default Product;