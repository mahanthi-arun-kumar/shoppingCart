import React, { Component } from "react";

export class Products extends Component {
  render() {
    return (
      <div>
        <ul className="products">
          {/* {this.props.products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <a href={"#" + product._id}>
                  <img src={product.image} alt={product.title}></img>
                  <p>{product.title}</p>
                </a>
                <div className="product-price">
                  <div>{product.price}</div>
                  <button className="btn primary">Add To Cart</button>
                </div>
              </div>
            </li>
          ))} */}
          {this.props.products.map((product) => {
            return (
              <li key={product._id}>
                <div className="product">
                  <a href={"#" + product._id}>
                    <img src={product.image} alt={product.title}></img>
                    <p>{product.title}</p>
                  </a>
                  <div className="product-price">
                    <div>{product.price}</div>
                    <button onClick={()=>this.props.addToCart(product)} className="btn primary">Add To Cart</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Products;
