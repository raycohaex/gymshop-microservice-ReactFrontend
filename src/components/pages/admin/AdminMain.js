import React, { Component } from 'react';
import Keycloak from 'keycloak-js';
import UserInfo from './UserInfo';
import AdminNavbar from './admincomponents/adminNavbar';
import LoadingAnimation from './admincomponents/loadingAnimation';

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
          <LoadingAnimation/>
        );
      }
    }

export default AdminMain;