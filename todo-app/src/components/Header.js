import React from 'react'
import './Header.css'

export const Header = (props) => {
  if (props.isVisible === true) {
    return (
    <div className="header">
      <h1 className="title">{props.title}</h1>
      <h3 className="subtitle">{props.subtitle}</h3>
    </div>)
  } else {
    return null;
  }
}

