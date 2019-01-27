import React, { Component } from "react";
import PropTypes from "prop-types";
import noimg from "../img/noimg.svg";
import ReactImageFallback from "react-image-fallback";
import './ImageResult.css'


class ImageResult extends Component {
    
    render() {
    let imageListContent;

    const { items } = this.props;
    if (items) {
      imageListContent = (
      <div className="layout">
        {items.map(item => (
        <div key={item.id} className="item">
         <ul>
        <ReactImageFallback
					src={item.image_link}
					fallbackImage={noimg}
					initialImage="loader.gif"
					alt="Image should be here"
					className="image-link" />
      
         <div className="item-list">
         <div className="item-name list">{item.name}</div>
         <div className="brand-name list">by {item.brand}</div>

        
        {/* tag_list is a list array and map trough each element here */}
         {item.tag_list.map(tag => (
           <li key={tag} className="tag-name list">{tag}</li>
         ))}
         <li><a href={item.product_link} className="link-btn list" target="_blank">SHOP</a></li>
        
         
         </div>
          </ul>
         {/* <div className="shop-btn">
         <a href={item.product_link} className="link-btn list" target="_blank">SHOP</a>
         </div> */}

          </div>
        ))}
        </div>
        
      );
      } else {
      imageListContent = null;
    }


    return (
      <div>
        {imageListContent}
      
      </div>
    );
    
}}


ImageResult.propTypes = {
 items: PropTypes.array.isRequired
};
export default ImageResult;