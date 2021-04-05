import React, {Component} from "react";
// import history from "./history";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "akinfergie@gmail.com",
            password : "1234567",
            message: ""
        };
    }

    onLoginClick = () => {
        if(this.state.email === "akinfergie@gmail.com"
        && this.state.password === "1234567"){
            this.setState({message: <span className="text-success"> 
                Successfully Logged In
            </span>});
        
        //after successful log in set the value of updateloggedinstatus = true
        this.props.updateIsLoggedInStatus(true);

        //navigate to dashboard
        this.props.history.replace("/dashboard");
        }
        else{
            this.setState({message : <span className="text-danger"> 
            Invalid Login, Please try again!
        </span>});
        } 

    }

    render(){
        return (
            <div className="row">
                <div className="col-lg-6 mx-auto"> 
                <h4 className="my-1 py-2 border-bottom">Login</h4>
                <div className="form-group form-row">
                    <label className="col-lg-4"> Email:</label>
                    <input type="text" className="form-control" 
                        value={this.state.email}
                        onChange={(event) =>
                        {
                            this.setState({email:event.target.value});

                        }

                        }>
                     </input>
                </div>
                <div className="form-group form-row">
                    <label className="col-lg-4"> Password:</label>
                    <input type="password" className="form-control" 
                    value={this.state.password}
                    onChange={(event) =>
                    {this.setState({password: event.target.value})}}></input>
                </div>
                

                <div className="text-right">
                    {this.state.message}
                    <button className="btn btn-primary m-2" onClick={this.onLoginClick}> Login </button>
                </div>
            </div>
        
            </div>
           
        )
    }

    componentDidMount(){
        document.title = "Login Page";
    }
}


export default Login