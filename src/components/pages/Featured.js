import React, { Component } from 'react';
import NavbarDefault from '../navbar';

class Featured extends Component {



    render() {
        return (
            <main>
                <NavbarDefault/>
                <h2>Currently empty, will probably feature products from a featured service</h2>
                <h3>Page acts as <b>home</b></h3>
            </main>
        );
    }
}

export default Featured;