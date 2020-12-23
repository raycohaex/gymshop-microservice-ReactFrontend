import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import axios from 'axios';
import { setup } from 'axios-cache-adapter'
import ProductBase from '../productBase'
import NavbarDefault from '../navbar';


class FeaturedCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catalog: []
        }
    }

    componentDidMount() {  

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <main>
                <NavbarDefault subcategoryname={this.props.match.params.mainCategory}/>

                <div className="bg-light jumbotron mt-5 text-left">
                    <h2 class="h5 font-weight-bold text-uppercase text-dark">Home</h2>
                    <h1 class="h2 font-weight-bold text-uppercase">{this.props.match.params.mainCategory}</h1>
                </div>
                <div className="container-fluid">
                    <section className="mt-2 mb-5">
                        <h3 className="h4 font-weight-bold text-uppercase text-dark text-left mb-3">Featured product row</h3>
                        <div className="row">
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                product
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                product
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                product
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                product
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                product
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                product
                            </div>
                        </div>
                    </section>
                    <section className="mt-2 mb-5">
                        <h3 className="h4 font-weight-bold text-uppercase text-dark text-left mb-3">Featured product row</h3>
                        <div className="row">
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                product
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                product
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                product
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                product
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                product
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                product
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}

export default FeaturedCategory;