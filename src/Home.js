import React, { Component } from 'react';
import App from './App';
import Product from './Product';

class Home extends Component {
    constructor(){
        super();

        this.state = {
            viewAsGrid: true
        }
    }

    toggleViewOnClick = () => {
        this.setState(state => {return {viewAsGrid: !this.state.viewAsGrid}});
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="btn-group">
                        {
                            this.state.viewAsGrid ? 
                            <button className="btn btn-primary" onClick={this.toggleViewOnClick}> List View</button> :
                            <button className="btn btn-primary" disabled> List View</button>
                        }
                        {
                            this.state.viewAsGrid ? 
                            <button className="btn btn-secondary" disabled> Grid View</button> : 
                            <button className="btn btn-secondary" onClick={this.toggleViewOnClick} > Grid View</button>
                        }
                    </div>
                </div>
                <div id="products" className="row view-group">
            {["Lagunitas","Goose Island","Sierra Nevada","Coors","Budweiser","Miller"].map(
                title => <Product title={title} addToCart={this.addToCart} key={title} viewAsGrid={this.state.viewAsGrid}></Product>
                )}
                </div>
            </div>
        );}}

    export default Home;