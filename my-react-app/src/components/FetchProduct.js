import React, { Component } from 'react';
import './FetchProduct.css';
import axios from "axios";


class FetchProduct extends Component {

state = {
  searchText: "",
  loading: true,
  apiUrl: "http://makeup-api.herokuapp.com/api/v1/products.json",
  items: []
};

onTextChange = e =>{
  const val = e.target.value;
  this.setState({[e.target.name]: val }, () => {
    if(val === ""){
      this.setState({items: []});
    } else {
      axios
      .get(
        `${this.state.apiUrl}?product_type=${this.state.searchText}`
      )
      .then(res => this.setState({items: res.data}))
      .catch(err => console.log(err));
    }
  });
};

// async componentDidMount() {
//  const url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick";
//     const response = await fetch(url);
//     const data = await response.json();
//    this.setState({ items: data, loading: false });
//   }

  render() {
    // if(this.state.loading) {
    //   return <div>loading...</div>
    // }

    // if(!this.state.items) {
    //   return <div>didn't get any product</div>
    // }

    
    return (
       <div className="search">
      <input name="searchText" className="search-bar" type="text" placeholder="Search" onChange={this.onTextChange}/> 
      
        <div className="layout">
        {this.state.items.map(item => (
        <div key={item.id} className="item">
         <img src={item.image_link} />
          <div>{item.brand}</div>
          <div>{item.name}</div>
         
          </div>
        ))}
         

        </div>
        </div>
    );
  }
}

export default FetchProduct;