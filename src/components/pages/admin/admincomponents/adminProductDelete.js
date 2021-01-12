import React, { Component } from 'react';
import axios from 'axios';

class AdminProductDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            productid: '',
            product: [],
            deletable: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

      componentDidMount() {
        if(this.props.token) {
            this.setState({
                token: this.props.token
            })
        }
        if(this.props.productSingular) {
            this.setState({
                product: this.props.productSingular
            })
        }
      }

      componentDidUpdate() {
      }

      handleChange(event) {
        if(event.target.value == "CONFIRM") {
            this.setState({
                deletable: true
            })
        } else {
            this.setState({
                deletable: false
            })
        }
      }

      deleteProduct = (productid) => {
        const config = {
            headers: { Authorization: `Bearer ${this.state.token}` }
        };
        axios.delete( 
            `https://localhost:5001/products/${productid}`,
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
            <div className="row">
                <div className="col-6 offset-3">
                <h1 className="h2">You're about to delete <b>{this.state.product.name}</b></h1>
                <span>Confirm this action by typing "CONFIRM"</span>

                <input onChange={this.handleChange} value={this.state.confirmstate} name="confirmstate" type="text" className="form-control mt-3"/>

                <span onClick={() => this.props.handler('overviewproduct')} className="btn btn-dark mt-2">Cancel</span>
                
                {this.state.deletable ? <span className="text-danger mt-5 d-block h3" onClick={this.deleteProduct(this.state.product.id)}>Deleting... you will be redirected automatically</span> : ''}
                </div>
            </div>
        );
    }
}

export default AdminProductDelete;