import React, { Component } from 'react';
import ProductBase from './productBase.js';

class Catalog extends Component {

    state = {
        loading: false,
        data: []
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch('https://gymshopapi-product-service.herokuapp.com/products')
            .then(data => data.json())
            .then(data => this.setState({ data, loading: false }));
    }

    componentDidUpdate() {
        console.log("One or more components just updated");
    }


    render() {
        return (
            <div className="catalog-list container">
                <div className="row">
                {
                    this.state.data.map((product, index) =>
                        <ProductBase key={index}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                        />    
                )
                }
</div>
            </div>
        );
    }
}

export default Catalog;