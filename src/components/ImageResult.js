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
					alt="Image should be here"
					className="image-link" />
      
         <li className="item-name">{item.name}</li>
         <li className="brand-name">by {item.brand}</li>

        
        {/* tag_list is a list array and map trough each element here */}
         {item.tag_list.map(tag => (
           <li key={tag} className="tag-name">{tag}</li>
         ))}
         <li className="link-btn"><a href={item.product_link} rel="noopener noreferrer" target="_blank">SHOP</a></li>
    
          </ul>
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


