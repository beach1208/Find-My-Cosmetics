import React, { Component } from 'react'
import "./WordRecommend.css"

export default class WordRecommend extends Component {
  render() {
    return (
      <div>
        <div className="keyword">By Keyword</div>
        <ul className="keyword-list">
            <li>Lipstick</li>
            <li>Foundation</li>
            <li>Blush</li>
            <li>EyeShadow</li>
            <li>Blonzer</li>
            <li>EyeBrow</li>
            <li>Eyeliner</li>
            <li>Mascara</li>
            <li>Nail Polish</li>
        </ul>
        
      </div>
    )
  }
}
