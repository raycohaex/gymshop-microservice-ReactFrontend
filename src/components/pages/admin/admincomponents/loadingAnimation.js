import React, { Component } from 'react';

class LoadingAnimation extends Component {



    render() {
        return (
            <div id="full-screen-load">
            <div id="full-screen-load-animation">
              <div id="load1"></div>
              <div id="load2"></div>
              <div id="load3"></div>
              <div id="load4"></div>
            </div>
            <span className="h6 text-bold">Loading</span>
          </div>
        );
    }
}

export default LoadingAnimation;