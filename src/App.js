import React, { Component } from "react";
import data from "./data.json";
import Filter from "./Filter";
import Products from "./Products";

class App extends Component {
  constructor() {
    super();
    this.state = {
      //what are the other ways of creating a object,pure function and impure function
      products: data.products,
      size: "",
      sort: "",
    };
  }
  sortProducts = (event) => {
    const sort=event.target.value;
    this.setState( {
      sort:event.target.value,
      products:this.state.products.slice().sort((a,b)=>{

      })
    });
  };
  filterProducts = (event) => {
    console.log("kannu");
    this.setState({
      size: event.target.value,
      products: data.products.filter(
        (product) => product.availableSizes.indexOf(event.target.value) >= 0
      ),
    });
  };

  render() {
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
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">Cart</div>
          </div>
        </main>
        <footer>All rights reserved.</footer>
      </div>
    );
  }
}

export default App;
