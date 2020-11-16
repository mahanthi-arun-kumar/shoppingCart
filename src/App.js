import React, { Component } from "react";
import data from "./data.json";
import Filter from "./Filter";
import Products from "./Products";
import Cart from './Cart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      //what are the other ways of creating a object,pure function and impure function
      products: data.products,
      size: "",
      sort: "",
      cartItems:[],
    };
  }

  addToCart=(product)=>{
   const cartItems=this.state.cartItems.slice();
   console.log(cartItems);
   let alreadyInCart=false;
   cartItems.forEach((cartItem)=>{
     if(cartItem._id===product._id){
       console.log(cartItem._id,product._id);
       cartItem.count++;
       alreadyInCart=true;
     }
   })
   if(!alreadyInCart){
     cartItems.push({...product,count:1})
   }
   this.setState({
     cartItems:cartItems
   })
  }
  removeFromCart=(product)=>{
    const cartItems=this.state.cartItems.slice();
    this.setState({
      cartItems:cartItems.filter((cartItem)=>cartItem._id!==product._id)
    })
  }
  sortProducts = (event) => {
    event.preventDefault();
    const sort=event.target.value;
    console.log(sort);
    if(sort==='Lowest'){
      this.setState( {
        sort:event.target.value,
        products:this.state.products.slice().sort((a,b)=>{
          console.log(a,b,"a");
           return  a.price-b.price;
        })
      });
    }
    else if(sort==='Highest'){
      this.setState( {
        sort:event.target.value,
        products:this.state.products.slice().sort((a,b)=>{
           return b.price-a.price;
        })
      });
    }
    else{
      this.setState( {
        sort:event.target.value,
        products:data.products,
            
        })
      };
    }
    
  filterProducts = (event) => {
    if(event.target.value===""){
      this.setState({
        size: event.target.value,
        products: data.products
      });
    }
    else{
    this.setState({
      size: event.target.value,
      products: data.products.filter(
        (product) => product.availableSizes.indexOf(event.target.value) >= 0
      ),
    });
  }
  };

  render() 
  {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                sortProducts={this.sortProducts}
                filterProducts={this.filterProducts}
              />
              <Products products={this.state.products} addToCart={this.addToCart}  />
            </div>
            <div className="sidebar">
              <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/>
            </div>
          </div>
        </main>
        <footer>All rights reserved.</footer>
      </div>
    );
  }
}

export default App;
