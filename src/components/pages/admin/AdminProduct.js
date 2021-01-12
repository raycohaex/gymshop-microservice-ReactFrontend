import React, { Component } from 'react';
import Keycloak from 'keycloak-js';
import UserInfo from './UserInfo';
import AdminNavbar from './admincomponents/adminNavbar';
import LoadingAnimation from './admincomponents/loadingAnimation';
import AdminProductOverview from './admincomponents/adminProductOverview';
import AdminProductAdd from './admincomponents/adminProductAdd';
import AdminProductDelete from './admincomponents/adminProductDelete';

class AdminProduct extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          keycloak: null, 
          authenticated: false,
          actionPage: 'overview' 
        };
      }

      handler = (val, productobj) => {
        this.setState({
          actionPage: val,
          product: productobj
        })
      }
    
      componentDidMount() {
        if(this.state.keycloak == null){
            const keycloak = Keycloak('/keycloak.json');
            keycloak.init({onLoad: 'login-required'}).then(authenticated => {
                this.setState({ keycloak: keycloak, authenticated: authenticated })
            })
        }
      }

      returnActionComponent = (component) => {
        return this.setState({actionPage: component});
      }

      renderSwitch(actionpage) {
        switch(actionpage) {
          case 'addproduct':
            return <AdminProductAdd handler={this.handler} token={this.state.keycloak.token}/>
            ;
          case 'deleteproduct':
            return <AdminProductDelete handler={this.handler} token={this.state.keycloak.token} productSingular={this.state.product}/>
          ;
          default:
            return <AdminProductOverview handler={this.handler}/>;
        }
      }
    
      render() {
        if(this.state.keycloak) {
          if(this.state.authenticated) 
          
          return (
            <div className="w-100 d-flex" style={{height:'100vh'}}>
              <AdminNavbar />
              <div style={{flex: "1 0"}}>
              <div className="container mt-5">
                {console.log(this.state.keycloak)}
                {this.renderSwitch(this.state.actionPage)}
                
              </div>

              </div>
            </div>
          ); 
          else 
          return (<div>Something went wrong!</div>)
        }
        return (
            <div className="w-100 d-flex" style={{height:'100vh'}}>
            <AdminNavbar />
            <div style={{flex: "1 0"}}>
            
            <LoadingAnimation/>

            </div>
            </div>
        );
      }
    }

export default AdminProduct;