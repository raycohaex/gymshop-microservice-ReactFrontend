import React, { Component } from 'react';

class UserInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      id: ""
    };
    this.props.keycloak.loadUserInfo().then(userInfo => {
        this.setState({name: userInfo.name, email: userInfo.email, id: userInfo.sub})
    });
  }

  render() {
    return (
      <div className="UserInfo">
        <div className="jumbotron m-5">
        <h1 className="h1 text-bold">Hello, {this.state.name}!</h1>
          <p className="lead">This is the backend for Gymshop, edit products and categories.</p>
        </div>
      </div>
    );
  }
}
export default UserInfo;