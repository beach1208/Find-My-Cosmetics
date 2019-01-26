import React, { Component } from 'react';
import './FetchProduct.css';
import axios from "axios";
import noimg from "../img/noimg.svg";
import ReactImageFallback from "react-image-fallback";
import OptionChange from "./OptionChange";



class FetchProduct extends Component {

state = {
  tagText:"",
  searchText: "",
  loading: true,
  apiUrl: "http://makeup-api.herokuapp.com/api/v1/products.json",
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

// handleOptionChange= e =>{
//   const val = e.target.value;
//   this.setState({[e.target.name]: val },() => {
//     if(val === ""){
//       this.setState({items: []});
//     } else {
//       axios
//       .get(
//         `${this.state.apiUrl}?product_type=${this.state.searchText}&product_tags=${this.state.tagText}`
//       )
//       .then(res => this.setState({items: res.data}))
//       .catch(err => console.log(err));
//     }
//   });
// };



  render() {
    return (
       <div className="search">
      <OptionChange/>
      {/* <select name="tagText" onChange={this.handleOptionChange}>
       <option value="Not Selected">Not Selected</option>
      <option value="canadian">Canadian</option>
      <option value="natural">Natural</option>
      <option value="vegan">Vegan</option>
      <option value="audi">Audi</option>
</select> */}

<input name="searchText" className="search-bar" type="text" placeholder="Search" onChange={this.handleInputChange}/>
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

         <ul>
         {item.tag_list.map(tag => (
           <li key={tag} className="tag-name list">{tag}</li>
         ))}
         </ul>
         
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