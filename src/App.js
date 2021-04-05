import React,{Component} from "react";
import './App.css';
import Dashboard from "./Dashboard";
import Navbar from './Navbar';
import Login from './Login';
import ShoppingCart from "./ShoppingCart";
import CustomersList from "./CustomersList";
import NoMatchPage from "./NoMatchPage";
import Sidebar from "./Sidebar";
import {Route, Switch, Router} from "react-router";
import {HashRouter} from "react-router-dom";
// import history from "./history";
import ProductById from "./ProductById";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn : false
    }
  }

  updateIsLoggedInStatus = (status) => {
    this.setState({isLoggedIn: status})
  }
  render(){
    return (
      <HashRouter>
        <Navbar 
          isLoggedIn={this.state.isLoggedIn}
          updateIsLoggedInStatus ={this.updateIsLoggedInStatus}
        />
        <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            {this.state.isLoggedIn ? 
            <Sidebar></Sidebar> : ""
            }

          </div>
          <div className="col-lg-9 col-md-9">
          <Switch>
            <Route path="/" exact 
            render={(props) => 
            
              (<Login {...props} updateIsLoggedInStatus ={this.updateIsLoggedInStatus}/> )
            
                }  />
            <Route path="/dashboard" exact component={Dashboard}/>
            <Route path="/customers" exact component={CustomersList}/>
            <Route path="/cart" exact component={ShoppingCart}/>
            <Route path="/product/:id" component={ProductById}/>

            <Route path="*" component={NoMatchPage}/>
          </Switch>
          </div>
        </div>
         
        </div>
  
      </HashRouter>
    );
  }
  
}

export default App;