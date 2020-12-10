import React, { Component } from 'react';

class Category extends Component {



    render() {
        return (
            <div>
                {this.props.match.params.mainCategory}
                Category
            </div>
        );
    }
}

export default Category;