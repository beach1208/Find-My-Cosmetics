import React, { Component } from 'react';
import axios from "axios";

export default class OptionChange extends Component {

state = {
  tagText:"",
  searchText: "",
  loading: true,
  apiUrl: "http://makeup-api.herokuapp.com/api/v1/products.json",
  items: []
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
      <div>
                <select name="tagText" onChange={this.handleOptionChange}>
       <option value="Not Selected">Not Selected</option>
      <option value="canadian">Canadian</option>
      <option value="natural">Natural</option>
      <option value="vegan">Vegan</option>
      <option value="audi">Audi</option>
</select>
        
      </div>
    )
  }
}
