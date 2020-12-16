import React, { Component } from 'react';

function productTitle(props) {
  if(props.name){
    return <h5 className="card-title">{props.name}</h5>
  }
}
function productDescription(props) {
  if(props.description){
    return <h6 className="card-subtitle mb-2 text-muted">{props.description}</h6>
  }
}
function productPrice(props) {
  if(props.price){
    return <p className="card-text">{props.price.toFixed(2)}&euro;</p>
  }
}

class ProductBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
}
  render() {
    return (
      <div className="product col-xl-3 col-lg-4 col-sm-6 col-xs-12">
        <a className="link-unstyled" href={"/product/" + this.props.id}>
          <div className="card-body">
            <img className="img-fluid" alt="product" src="https://via.placeholder.com/500/30a9ff/fff?text=product%0Aplaceholder"/>
            {productTitle(this.props)}
            {productDescription(this.props)}
            {productPrice(this.props)}
          </div>
        </a>
      </div>
    );
  }
}

export default ProductBase;