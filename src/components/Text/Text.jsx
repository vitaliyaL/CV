import React, { Component } from 'react'
import "./Text.css"
export default class Text extends Component {
  render() {
     const { title, subtitle, desc, link, desc_link ,link2, desc_link2 } = this.props;
    return (
      <div className='Text'>
          <div className="title">
           {title.toUpperCase()}
          </div>
          <div className="subtitle">
           {subtitle}
          </div>
          <div className="link">
           <a href={link} target="_blank">{desc_link} </a>
          </div>
          <div className="link">
           <a href={link2} target="_blank">{desc_link2} </a>
          </div>
          <div className="text_desc">
           {desc}
          </div>
      </div>
    )
  }
}
