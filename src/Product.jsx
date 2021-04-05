import React, {Component} from "react";
import {Link} from "react-router-dom";
class Product extends Component{
    render(){
        return (
                <div className ="col-md-6 col-lg-6">
                <div className = "card m-2">
                    <div className="card-body">
                        <div className="text-muted"># {this.props.product.id}
                            <span className="float-right hand-icon" onClick={() => {this.props.onDelete(this.props.product)}}>
                                <i className="fa fa-times"></i>
                            </span>
                        </div>
                        <h5 className="pt-5 border-top">{this.props.product.productName}</h5>
                        <div> ${this.props.product.price}</div>
                    </div>
                    <div className="card-footer" >
                        <div className="float-left"> 
                            <span className="badge">{this.props.product.qty}</span>
                        <div className="btn-group">
                            <button className="btn btn-outline-success" onClick={ () => {this.props.onIncrement(this.props.product, 10);}}>+</button>
                            <button className="btn btn-outline-success"  onClick={ () => {this.props.onDecrement(this.props.product, 0);}}>-</button>

                        </div>
                        </div>
                        <div className="float-right">
                            <Link to={`product/${this.props.product.id}`} className="mr-2">Details </Link>
                            {this.props.children}

                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default Product;