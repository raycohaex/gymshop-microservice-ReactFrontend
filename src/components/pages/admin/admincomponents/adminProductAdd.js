import React, { Component } from 'react';
import axios from 'axios';

class AdminProductAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            productname: '',
            productsku: '',
            productdescription: '',
            productprice: '',
            productavailable: true,
            productcategoryid: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      componentDidMount() {
        if(this.props.token) {
            this.setState({
                token: this.props.token
            })
        }
      }

    handleSubmit(event) {
        console.log
        (`
        productname: ${this.state.productname}
        product SKU: ${this.state.productsku}
        productdescription: ${this.state.productdescription}
        productprice: ${this.state.productprice}
        productavailable: ${this.state.productavailable}
        productcategory: ${this.state.productcategoryid}
        `);
        event.preventDefault();
    }

    postTest = () =>{
        const config = {
            headers: { Authorization: `Bearer ${this.state.token}` }
        };
        
        const bodyParameters = {
           Name: "Sent from frontend2",
           Sku: "sff",
           Description: "delete this later",
           price: 88,
           categoryId: 3
        };
        
        axios.post( 
          'https://gymshopapi-product-service.herokuapp.com/products',
          bodyParameters,
          config
        )
        .then((response) =>
        {
            this.props.handler('productoverview')
        })
        .catch((error) =>
        {
            console.log(error.response);
        });
    }

    render() {
        return (
            <div>
                <header className="my-5 text-left">
                  <h1 className="mb-3">Add product</h1>
                </header>
                <div className="btn btn-primary" onClick={this.postTest}>Send</div>
                <main className="mt-5">
                <form onSubmit={this.handleSubmit} className="text-left" style={{maxWidth: 780}}>
                    <div className="row">
                        <div className="form-group col-6">
                            <label htmlFor="productname">Product name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="productname" 
                                id="productname" 
                                placeholder="Product name" 
                                value={this.state.productname} 
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group col-4">
                            <label htmlFor="productsku">Product SKU</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="productsku"
                                id="productsku" 
                                placeholder="Product sku" 
                                value={this.state.productsku} 
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group col-2">
                            <label htmlFor="productprice">Product price</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                name="productprice"
                                id="productprice" 
                                value={this.state.productprice} 
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group col-12">
                            <label htmlFor="productdescription">Product description</label>
                            <textarea 
                                type="text" 
                                className="form-control" 
                                name="productdescription"
                                id="productdescription" 
                                value={this.state.productdescription} 
                                onChange={this.handleInputChange} />
                        </div>
                        <div class="col-12">
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="productavailable">Product available</label>
                                <input 
                                    type="checkbox" 
                                    className="form-check-input" 
                                    name="productavailable"
                                    id="productavailable" 
                                    value=""
                                    checked={this.state.productavailable} 
                                    onChange={this.handleInputChange} 
                                    style={{left: 0, marginLeft: 0}}/>
                            </div>
                        </div>
                        <div class="col-12 mt-4 d-flex justify-content-between">
                            <button type="submit" className="btn btn-success">Submit</button>
                            <span onClick={() => this.props.handler('overview')} className="btn btn-primary ml-2">Cancel</span>
                        </div>
                    </div>
                </form>
                </main>
            </div>
        );
    }
}

export default AdminProductAdd;