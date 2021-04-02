import React, { Component } from 'react';
import Product from "./Product";

class ShoppingCart extends Component {

    constructor(props){
        super(props);
        //initialization of the state
        this.state = {
            products: [
                {id: 1, productName: "iphone", price: 1000, qty: 0},
                {id: 2, productName: "Sony", price: 4500, qty: 0},
                {id: 3, productName: "Samsung", price: 5610, qty: 0},
                {id: 4, productName: "Xbox", price: 9000, qty: 0},
                {id: 5, productName: "Lenove", price: 12000, qty: 0},
                {id: 6, productName: "iphone", price: 700, qty: 0}
            ],
    
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

} 
export default ShoppingCart;