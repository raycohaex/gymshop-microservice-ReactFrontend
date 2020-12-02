import React, { Component } from 'react';

class NavbarDefault extends Component {
  render() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
                <div class="navbar-left">
                    <a id="site-logo" className="navbar-brand" href="#">GymShop</a>
                </div>
                <div class="navbar-center">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Supplements <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Men
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">(Placeholder) Shirts</a>
                                <a className="dropdown-item" href="#">(Placeholder) Jogging pants</a>
                                <a className="dropdown-item" href="#">(Placeholder) Shoes</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Women
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">(Placeholder) Tops</a>
                                <a className="dropdown-item" href="#">(Placeholder) Jogging pants</a>
                                <a className="dropdown-item" href="#">(Placeholder) Shoes</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="navbar-right">
                    <a class="btn btn-primary" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></a>
                    <a class="btn btn-primary" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></a>
                </div>
            </nav>
    );
  }
}

export default NavbarDefault;