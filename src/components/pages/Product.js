import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import axios from 'axios';
import { setup } from 'axios-cache-adapter'
import NavbarDefault from '../navbar';

function conditionalOutput(input) {
    if(input){
        return <div>{input}</div>
    }
}

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        }
    }

    componentDidMount() {  
        console.log(this.props);
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
        let mainCategory = this.props.location.state.mainCategory;
        let subCategory = this.props.location.state.subCategory
        return (
            <main>
                <NavbarDefault subcategoryname={mainCategory} useActive={subCategory}/>


                <div className="container-fluid mt-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item"><a href={"/catalog/" + mainCategory}>{mainCategory}</a></li>
                            <li class="breadcrumb-item" aria-current="page"><a href={"/catalog/" + mainCategory + "/" + subCategory}>{subCategory}</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{this.state.product.name}</li>
                        </ol>
                    </nav>
                    <div className="row mt-3">
                        <div class="col-12 col-lg-6">
                            images here
                        </div>
                        <div class="col-12 offset-lg-2 col-lg-4 text-left d-flex flex-column">
                            <h1 className="font-weight-bold h2">{this.state.product.name}</h1>
                            <div><span className="h4 mr-1">&euro;{this.state.product.price}</span><span className="text-dark font-weight-light">includes tax</span></div>
                            {conditionalOutput(this.state.product.description)}
                            <div className="bg-dark text-light d-flex mr-auto mt-4 p-3">Rating: ⭐⭐⭐⭐ (4/5)</div>
                            <div class="btn btn-primary mt-4 d-flex mr-auto">Order</div>
                        </div>
                    </div>
                </div>
                
            </main>
        );
    }
}

export default Product;