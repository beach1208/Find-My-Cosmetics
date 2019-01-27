import React, { Component } from 'react';
import './FetchProduct.css';
import axios from "axios";
import ImageResult from "./ImageResult";
import WordRecommend from "./WordRecommend";

class FetchProduct extends Component {

state = {
  tagText:"",
  searchText: "",
  loading: true,
  apiUrl: "https://makeup-api.herokuapp.com/api/v1/products.json",
  items: []
};


handleInputChange= e =>{
  const val = e.target.value;
  this.setState({[e.target.name]: val },() => {
    if(val === ""){
      this.setState({items: []});
    } else {
      axios
      .get(
        `${this.state.apiUrl}?product_type=${this.state.searchText}&product_tags=${this.state.tagText}`
      )
      .then(res => this.setState({items: res.data}))
      .catch(err => console.log(err));
    }
  });
};

handleOptionChange= e =>{
  const val = e.target.value;
  this.setState({[e.target.name]: val },() => {
    if(val === ""){
      this.setState({items: []});
    } else {
      axios
      .get(
        `${this.state.apiUrl}?product_type=${this.state.searchText}&product_tags=${this.state.tagText}`
      )
      .then(res => this.setState({items: res.data}))
      .catch(err => console.log(err));
    }
  });
};


  render() {

    return (
    <div className="search">

    <input name="searchText" className="search-bar" type="text" placeholder="Search" onChange={this.handleInputChange}/>

    <WordRecommend/>

   
    <select className="select-bar" name="tagText" onChange={this.handleOptionChange}>
    <option value="Not Selected">Not Selected</option>
    <option value="canadian">Canadian</option>
    <option value="certclean">Cert Clean</option>
    <option value="chemical free">Chemical Free</option>
    <option value="dairy free">Dairy Free</option>
    <option value="ewg verified">EWG Verified</option>
    <option value="ecocert">Eco Cert</option>
    <option value="fair trade">Fair Trade</option>
    <option value="gluten free">Gluten Free</option>
    <option value="hypoallergenic">Hypoallergenic</option>
    <option value="natural">Natural</option>
    <option value="No Talc">No Talc</option>
    <option value="organic">Organic</option>
    <option value="peanut free product">Peanut Free Product</option>
    <option value="sugar free">Sugar Free</option>
    <option value="usda organic">USDA Organic</option>
    <option value="vegan">Vegan</option>
    <option value="alcohol free">Alcohol Free</option>
    <option value="cruelty free">Cruelty Free</option>
    <option value="oil free">Oil Free</option>
    <option value="purpicks">Purpicks</option>
    <option value="silicone free">Silicon Free</option>
    <option value="water free">Water Free</option>
  
    </select>  
     <div className="category">By Category</div>

        <ImageResult items={this.state.items} />
 </div>
    );
  }
}

export default FetchProduct;