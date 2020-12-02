import React, { Component } from 'react';

class ProductBase extends Component {
  render() {
    return (
      <div className="product col-xl-3 col-lg-4 col-sm-6 col-xs-12">
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.description}</h6>
          <p className="card-text">{this.props.price.toFixed(2)}&euro;</p>
        </div>
      </div>
    );
  }
}

export default ProductBase;