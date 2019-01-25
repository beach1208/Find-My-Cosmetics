import React, { Component } from 'react';
import './FetchProduct.css';
import axios from "axios";
import noimg from "../img/noimg.svg";
import ReactImageFallback from "react-image-fallback";



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


  render() {
    
    return (
       <div className="search">
      <input name="searchText" className="search-bar" type="text" placeholder="Search" onChange={this.onTextChange}/> 
        <div className="layout">
        {this.state.items.map(item => (
        <div key={item.id} className="item">

        <ReactImageFallback
					src={item.image_link}
					fallbackImage={noimg}
					initialImage="loader.gif"
					alt="Image should be here"
					className="image-link" />
      
         <div className="item-list">
         <div className="item-name list">{item.name}</div>
         <div className="brand-name list">by {item.brand}</div>
         <div className="tag-name list">{item.tag_list}</div>
         </div>

         <div className="shop-btn">
         <a href={item.product_link} className="link-btn list" target="_blank">SHOP</a>
         </div>

          </div>
        ))}
         

        </div>
        </div>
    );
  }
}

export default FetchProduct;