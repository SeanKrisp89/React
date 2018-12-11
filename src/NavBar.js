import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import App from './App';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <NavLink className="nav-link" to="/">React Store</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                      
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav mr-auto">
                            <li className="nav-item active"> 
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to="/Cart">
                              <i className="fas fa-shopping-cart"></i><span className = "badge badge-secondary">{this.props.number}</span></NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink className="nav-link" to="/About">About</NavLink>
                            </li>
                          </ul>
                        </div>
                      </nav>);
    }
}

export default NavBar;

