import React, { Component } from 'react';
import Product from './Product';
import NavBar from './NavBar';

class App extends Component {

  constructor(){
    super();

    this.state = {
      cart: []
    }
  }

  addToCart = (product) => {
    this.setState(state => {return {cart: this.state.cart.concat([product])}});
  }

  render() {
    return (
      <div> 
              {[this.state.cart.length].map(number => <NavBar number={number}></NavBar>)}
        <div className="container">
          <div className="row">
            <div className="col-12 my-3">
            </div>
          </div>
          <div id="products" className="row view-group">
            {["Lagunitas","Goose Island","Sierra Nevada","Coors","Budweiser","Miller"].map(title => <Product title={title} addToCart={this.addToCart}></Product>)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
