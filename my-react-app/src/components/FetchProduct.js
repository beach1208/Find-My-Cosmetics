import React, { Component } from 'react'

class FetchUser extends Component {

state = {
  loading: true,
  product: []
}

// async componentDidMount(){
//   fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_category=powder&product_type=blush")
//   .then(response => response.json())
//   .then (data => this.setState({product: data.name, loading: false}));
//   // const response = await fetch(url);
//   // const data = await response.json();
  
//   // this.setState({product : data[0],loading: false})
// }

async componentDidMount() {
 const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
   this.setState({ product: data.results, loading: false });
  }

  render() {
    if(this.state.loading) {
      return <div>loading...</div>
    }

    if(!this.state.product.length) {
      return <div>didn't get any product</div>
    }
    return (
      <div>
        {this.state.product.map(p => (
        <div key={p.login.uuid}>
          <div>{p.name.title}</div>
          <div>{p.name.first}</div>
          <div>{p.name.last}</div>
          <img src={p.picture.large} />
        </div>
        ))}
         

        {/* <div>{this.state.product.brand}</div>
        <div>{this.state.product.name}</div>
        <img src={this.state.product.image_link} />

        <div>{this.state.product.brand}</div>
        <div>{this.state.product.name}</div>
        <img src={this.state.product.image_link} />

        <div>{this.state.product.brand}</div>
        <div>{this.state.product.name}</div>
        <img src={this.state.product.image_link} /> */}
        </div>
    );
  }
}

export default FetchUser;