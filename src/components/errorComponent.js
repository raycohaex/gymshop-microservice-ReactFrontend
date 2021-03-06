import React, { Component } from 'react';

class ErrorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorTitle: "404 - Not found",
            errorMessage: "It seems like you got a little lost."
            }
        }

        componentDidMount() {
            if(this.props.errorTitle){
                this.setState({
                    errorTitle: this.props.errorTitle
                })
            }
            if(this.props.errorMessage){
                this.setState({
                    errorMessage: this.props.errorMessage
                })
            }
        }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 d-flex flex-column align-items-start">
                            <h1 id="errorTitle" className="display-4 font-weight-bold text-left">{this.state.errorTitle}</h1>
                            <span id="errorDescription">{this.state.errorMessage}</span>
                            <a href="/" className="btn btn-primary mr-auto mt-3">Go back</a>
                        </div>
                        <div className="col-12 col-md-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
                                <defs></defs>
                                <g className="cls-1">
                                    <g id="Layer_2" data-name="Layer 2">
                                    <path className="cls-2" d="M383.15,851.41s-79.45-43.69-92.9-121.2c-11.93-68.75,0-98.69-17.23-129.88a8,8,0,0,1,7.87-11.79c51.24,5.82,93.92,56.09,93.92,56.09s2.69-171,116.07-227.53c96.47,3.84,135.21,0,135.21,0s10.07,52.27,57.73,116.84c34.79,47.13,45.35,102.2,36.13,124.14,20.48-1.88,48.53-40.45,63.46-63.31a8,8,0,0,1,14.55,3c9.61,53.48,23,201.77-108.83,257.46C540.07,855.18,383.15,851.41,383.15,851.41Z"/>
                                    <path className="cls-3" d="M403,810.76s-77.91-46.22-77.4-142.56c52.79,16.4,103.52,71.28,103.52,71.28S425.71,588.08,485.84,540c87.15,7.78,106.51-35.27,106.51-35.27s5.39,41.51,51,94.8c32.8,38.34,46.13,83.05,37.93,118.91,28.69-4.12,79.94-48.65,79.94-48.65s-2,106-67.35,132.68S403,810.76,403,810.76Z"/>
                                    <rect class="cls-4" x="453.91" y="485.77" width="172.19" height="37.92" rx="18.96"/>
                                    <path class="cls-4" d="M378,908H702c39,0,61.71-44.19,38.93-75.9L540,552.39,339.07,832.13C316.29,863.84,339,908,378,908Z"/>
                                    <rect class="cls-4" x="480.56" y="504.73" width="118.89" height="163.47"/>
                                    <path class="cls-5" d="M408.72,864H671.28a22.53,22.53,0,0,0,18.3-35.68L540,620,390.42,828.28A22.53,22.53,0,0,0,408.72,864Z"/>
                                    <circle class="cls-6" cx="473.76" cy="735.56" r="17.12"/>
                                    <circle class="cls-6" cx="606.24" cy="735.56" r="17.12"/>
                                    <path class="cls-7" d="M540,755.49c16.47,0,32.44,6.49,31.42,15.2s-20.14,8.54-31.42,8.54-27.68-.59-30.67-7.34S518.83,755.49,540,755.49Z"/>
                                    <path class="cls-8" d="M461.93,762.41s7.3,6.62,20.33,1.81"/>
                                    <path class="cls-8" d="M618.07,762.41s-7.3,6.62-20.33,1.81"/>
                                    <rect class="cls-5" x="507.01" y="485.77" width="65.98" height="204.98"/>
                                    <path class="cls-5" d="M507,511.65s-3.83-43.82-50.38-74.82c-34.49-23-108.35-28.68-93.74-66.11,11.41-29.21,60.65-2.69,93.74-13.07S398,240.43,434.46,210.07s57.19,56.5,88.32,47.66,76.66-43.18,103.31-16.15c40,40.62-29.9,112.62-10.3,127.61s76.69-21.53,88.4,5.38C720.89,413,574.32,452.29,573,511.65Z"/>
                                    <path class="cls-5" d="M709.71,301.33a5.06,5.06,0,0,1-7.22-6.07c4.09-11.88,11.1-28.31,21-37.53,18.62-17.43,50-8.88,45.09,16.39C764.89,292.75,734.29,288.07,709.71,301.33Z"/>
                                    <path class="cls-5" d="M378.38,313.86A3.21,3.21,0,0,0,383,310c-2.6-7.54-7.05-18-13.31-23.84-11.83-11.07-31.8-5.64-28.65,10.42C343.33,308.41,362.77,305.44,378.38,313.86Z"/>
                                    <path class="cls-2" d="M255.48,652.11s-7.45-13.89-10.54-34.76c-3.87-26.13-11.6-45.92-34.53-49.25C199.91,597.48,208.63,637.54,255.48,652.11Z"/>
                                    <path class="cls-2" d="M750,546.24s-8.17-46.89,31.42-69.18C784.52,497,780.48,539.32,750,546.24Z"/>
                                    <path class="cls-2" d="M794,798s25-24.33,33.72-72.85,44.6-62.2,44.6-62.2-14,37.77-19.36,79.8C848.5,777.83,815.31,793.65,794,798Z"/>
                                    <path class="cls-9" d="M485.84,411s24.26,19.47,35.53,66.11c8.35,34.55,7.34,91,7.34,91"/>
                                    <path class="cls-9" d="M581.84,340.76s-21.52,26.12-27.77,84.56"/>
                                    <line class="cls-9" x1="550.07" y1="518.57" x2="550.07" y2="594.67"/>
                                    </g>
                                    </g>
                                    </svg>
                        </div>
                    </div>
               </div>
            </div>
        );
    }
}

export default ErrorComponent;