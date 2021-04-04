import React, {Component} from "react";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password : "",
            message: ""
        };
    }

    onLoginClick = () => {
        if(this.state.email === "akinfergie@gmail.com"
        && this.state.password === "1234567"){
            this.setState({message: <span className="text-success"> 
                Successfully Logged In
            </span>});
        }
        else{
            this.setState({message : <span className="text-danger"> 
            Invalid Login, Please try again!
        </span>});
        } 

    }

    render(){
        return (
            <div className="col-lg-9"> 
                <h4 className="m-1 p-2 border-bottom">Login</h4>
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
        )
    }
}


export default Login