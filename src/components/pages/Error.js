import React, { Component } from 'react';
import NavbarDefault from '../navbar';
import ErrorComponent from '../errorComponent';

class Error extends Component {



    render() {
        return (
            <div>
                <NavbarDefault/>
                <ErrorComponent />
            </div>
        );
    }
}

export default Error;