import React, {Component} from "react";
// import axios from 'axios';
class Dashboard  extends Component {
    
    render(){
        return (
            <div>
                Dashboard
            </div>
        );
    }

    componentDidMount(){
        document.title = "Dashboard Page";
    }
}

export default Dashboard; 