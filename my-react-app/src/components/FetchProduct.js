import React, { Component } from 'react'

class FetchUser extends Component {

state = {
  loading: true,
  product: null
}

async componentDidMount(){
  fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_category=powder&product_type=blush")
  .then(response => response.json())
  .then (data => this.setState({product: data.name, loading: false}));
  // const response = await fetch(url);
  // const data = await response.json();
  
  // this.setState({product : data[0],loading: false})
}

  render() {
    if(this.state.loading) {
      return <div>loading...</div>
    }

    if(!this.state.product) {
      return <div>didn't get any product</div>
    }
    return (
      <div>
        <div>{this.state.product.brand}</div>
        <div>{this.state.product.name}</div>
        <img src={this.state.product.image_link} />

        <div>{this.state.product.brand}</div>
        <div>{this.state.product.name}</div>
        <img src={this.state.product.image_link} />

        <div>{this.state.product.brand}</div>
        <div>{this.state.product.name}</div>
        <img src={this.state.product.image_link} />
        </div>
    )
  }
}

export default FetchUser;