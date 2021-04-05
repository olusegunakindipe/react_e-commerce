import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
// import history from './history';
class Navbar extends Component{

    constructor(props){
        super(props)
    }
    onLogoutClick = (event) => {
        event.preventDefault();
        this.props.updateIsLoggedInStatus(false);
        //navigate to login component
        // history.replace("/")
        document.location.hash = "/";
    }
    render()
    {
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">eCommerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                     </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {!this.props.isLoggedIn ? (
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" activeClassName="active" exact={true}>Login</NavLink>
                            </li>) : ""}
                            
                            {this.props.isLoggedIn ? ( 
                            <li className="nav-item">
                                <NavLink to="/customers" className="nav-link" activeClassName="active">Customers</NavLink>
                            </li>) : ""}
                           
                            {this.props.isLoggedIn ? (
                            <li className="nav-item">
                                <NavLink to="/dashboard" className="nav-link" activeClassName="active">Dashboard</NavLink>
                            </li>) : ""}

                            {this.props.isLoggedIn ? (
                            <li className="nav-item">
                                <NavLink to="/cart" className="nav-link" activeClassName="active" >ShoppingCart</NavLink>
                            </li>
                            ) : ""}
                            
                            {this.props.isLoggedIn ? (
                            <li className="nav-item">
                                <a href="/#" className="nav-link" onClick= {this.onLogoutClick}>Logout</a>
                            </li>
                            ) : ""}
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
        )
    }
}

export default Navbar