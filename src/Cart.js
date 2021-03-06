import React, { Component } from 'react';

export class Cart extends Component {
    render() {
        const {cartItems}=this.props;
        return (
            <div>
              <div>
                {
                   cartItems.length===0?(
                       <div className="cart cartHeader">there are no items in cart</div>
                   ):(
                   <div className="cart cartHeader">there are {cartItems.length} in Cart</div>
                   )
                }
              </div>
              <div>
             <div className="cart">
                        <ul className="cart-items">
                {cartItems.map((item) => (
                  <li key={item._id}>
                    <div>
                      <img src={item.image} alt={item.title}></img>
                    </div>
                    <div>
                      <div>{item.title}</div>
                      <div className="right">
                        {item.price} x {item.count}{" "}
                        <button
                          className="button"
                          onClick={() => this.props.removeFromCart(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {cartItems.length !== 0 && (
              <div className="cart">
                <div className="total">
                  <div>
                    Total:{" "}
                  
                      {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
                   
                  </div>
                  <button
                    className="button primary"
                  >
                    Proceed
                  </button>
                </div>
              </div>
            )}


          </div>
          </div>
        )
    }
}

export default Cart;
