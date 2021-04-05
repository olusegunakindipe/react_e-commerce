import React, {Component} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
class ProductById  extends Component {

    constructor(props){
        super(props)

        this.state = {
            products : {

            },
        }
    }
    
    render(){
        return (
            <div className="row">
                   <div className ="col-md-6 col-lg-6">
                <div className = "card m-2">
                <div className="card-body">
                    <div className="text-muted"># {this.state.products.id}
                        <span className="float-right hand-icon" onClick={() => {this.props.onDelete(this.props.product)}}>
                            <i className="fa fa-times"></i>
                        </span>
                    </div>
                    <h5 className="pt-5 border-top">{this.state.products.productName}</h5>
                    <div> ${this.state.products.price}</div>
                </div>
                <div className="card-footer" >
                    <div className="float-left"> 
                        <span className="badge">{this.state.products.qty}</span>
                    <div className="btn-group">
                        <button className="btn btn-outline-success" onClick={ () => {this.props.onIncrement(this.state.product, 10);}}>+</button>
                        <button className="btn btn-outline-success"  onClick={ () => {this.props.onDecrement(this.state.product, 0);}}>-</button>

                    </div>
                    </div>
                    <div className="float-right">
                        <Link to="/cart" className="btn btn-secondary"> Back</Link>
                        {this.props.children}

                    </div>
                </div>
            </div>
        </div>
    
            </div>
         
    )           
    
    }

    componentDidMount(){

        document.title = `${this.state.products.productName} Page`;
        
        const id = this.props.match.params.id;
        // console.log("id", getId.id);
        axios.get(`http://localhost:4000/products/${id}`)
        .then(res => {
            const products = res.data;
            if(res.data){
                this.setState({products});

            }
        })
        
    }
}

export default ProductById; 