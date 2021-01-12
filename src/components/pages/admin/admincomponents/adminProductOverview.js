import React, { Component } from 'react';
import axios from 'axios';

class AdminProductOverview extends Component {
      constructor(props) {
        super(props);
        this.state = {
            products: [],
            error: null
        };
    }

    async getData() {
      const res = await axios.get('https://localhost:5001/products/all');
      return await res;
    }


    componentDidMount() {
        this.getData()
        .then(res => { this.setState({ products: res.data})})      
        .catch(err => { console.log(err)}
        );
    }

    

    renderRows = (products) => {
      if(products) {
        return Object.keys(products).map((item, index) => {
            let inStock = products[item].isAvailable;
            return(
              <tr>
              <td scope="row" id={products[item].id}>{products[item].id}</td>
              <td>{products[item].name}</td>
              <td>{products[item].description}</td>
              <td>{products[item].price}</td>
              <td>
              <div class="checkbox">
                <label><input type="checkbox" value="" checked={inStock} />Available</label>
              </div>
              </td>
              <td>
                  <span className="btn btn-warning ml-2 disabled">Edit</span>
                  <span className="btn btn-danger ml-2" onClick={() => this.props.handler('deleteproduct', products[item])}>Delete</span>
              </td>
            </tr>
            )
          })
        ;
      }
    }

    render() {
        return (
            <div>
                <header className="my-5 text-left">
                  <h1 className="mb-3">Product overview</h1>
                  <span onClick={() => this.props.handler('addproduct')} className="btn btn-primary ml-2">Add product</span>
                </header>
                <main className="mt-5">
                  <table className="table table-striped header-fixed">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col">In stock</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>

                    {console.log(this.state.products.length)}
                      {(this.state.products.length > 0) ?
                        this.renderRows(this.state.products)
                        : <tr><td>loading</td></tr>
                    }
                    </tbody>
                  </table>
                </main>
            </div>
        );
    }
}

export default AdminProductOverview;