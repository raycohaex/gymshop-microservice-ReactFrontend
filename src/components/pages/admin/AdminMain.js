import React, { Component } from 'react';
import Keycloak from 'keycloak-js';
import UserInfo from './UserInfo';
import AdminNavbar from './admincomponents/adminNavbar';

class AdminMain extends Component {

    constructor(props) {
        super(props);
        this.state = { keycloak: null, authenticated: false };
      }
    
      componentDidMount() {
        if(this.state.keycloak == null){
          const keycloak = Keycloak('/keycloak.json');
          keycloak.init({onLoad: 'login-required'}).then(authenticated => {
              this.setState({ keycloak: keycloak, authenticated: authenticated })
          })
      }
      }
    
      render() {
        if(this.state.keycloak) {
          if(this.state.authenticated) return (
            <div className="w-100 d-flex" style={{height:'100vh'}}>
              <AdminNavbar />
              <div style={{flex: "1 0"}}>
              <UserInfo keycloak={this.state.keycloak} />
              </div>
            </div>
          ); else return (<div>Something went wrong!</div>)
        }
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

export default AdminMain;