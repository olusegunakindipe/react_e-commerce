import React, { Component } from 'react';
import axios from 'axios';
import Product from "./Product";

class ShoppingCart extends Component {

    constructor(props){
        super(props);
        //initialization of the state
        this.state = {
            products: []
        } 
    }
  
    handleIncrement =(product, max) => {
        console.log(max)
        let allProducts = [...this.state.products]; 
        //get the index of the array
        let index = allProducts.indexOf(product);

        if(allProducts[index].qty < max){
            allProducts[index].qty++;
        }
        this.setState({products: allProducts})
    };

    handleDecrement =(product, limit) => {
        let allProducts = [...this.state.products]; 
        //get the index of the array
        let index = allProducts.indexOf(product);
        if(allProducts[index].qty > limit){
            allProducts[index].qty--;
        }
        this.setState({products: allProducts})

    };

    handleDelete = (product) => {
        let allProducts = [...this.state.products]; 
        //get the index of the array
        let index = allProducts.indexOf(product);

        if(window.confirm("Are you sure to delete")){
            allProducts.splice(index, 1);
        //delete correspoding product
            this.setState({products: allProducts})
        }

    }


    render(){
        return (
            <div className="container-fluid">
                <h4>Shopping Cart</h4>
                <div className = "row">
                  {this.state.products.map(
                      (prod) => {
                        return <Product key={prod.id} product ={prod} onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete = {this.handleDelete}>
                                    <button className="btn btn-primary"> Buy Now</button>
                                </Product>
                      }
                  )}  
                </div>
            </div>

        );
    }

    componentDidMount(){
        axios.get(`http://localhost:4000/products`)
            .then(res => {
                const products = res.data
                this.setState({products});
            })
    }
} 
export default ShoppingCart;