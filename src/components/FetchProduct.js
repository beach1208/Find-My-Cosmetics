import React, { Component } from 'react';
import './FetchProduct.css';
import axios from "axios";
import ImageResult from "./ImageResult";
import WordRecommend from "./WordRecommend";
import _ from 'lodash'
import OptionSelect from './OptionSelect';


class FetchProduct extends Component {

state = {
  tagText:"",
  searchText: "",
  loading: true,
  apiUrl: "https://makeup-api.herokuapp.com/api/v1/products.json",
  items: []
};

renderOptions() {
  return _.map(OptionSelect,({label,value})=> {
    return(
      <option key={label} label={label} value={value}/>
    )
  })
}


handleTermChange= e =>{
  e.preventDefault()
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
        <input name="searchText" className="search-bar" type="text" placeholder="Search" onChange={this.handleTermChange}/>
          <WordRecommend/>
          <select className="select-bar" name="tagText" onChange={this.handleOptionSearch}>
            {this.renderOptions()}
          </select>  
      <div className="category">By Category</div>
      <ImageResult items={this.state.items} />
      </div>
    );
  }
}

export default FetchProduct;