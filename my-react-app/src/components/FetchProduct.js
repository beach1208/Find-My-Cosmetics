import React, { Component } from 'react';
import './FetchProduct.css';

class FetchProduct extends Component {

state = {
  loading: true,
  items: []
}

async componentDidMount() {
 const url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick";
    const response = await fetch(url);
    const data = await response.json();
   this.setState({ items: data, loading: false });
  }

  render() {
    if(this.state.loading) {
      return <div>loading...</div>
    }

    if(!this.state.items) {
      return <div>didn't get any product</div>
    }
    return (
       <div className="layout">
        {this.state.items.map(item => (
        <div key={item.id} className="item">
         <img src={item.image_link} />
          <div>{item.brand}</div>
          <div>{item.name}</div>
         
          </div>
        ))}
         
 
      

        </div>
        
    );
  }
}

export default FetchProduct;