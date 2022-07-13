import React, { Component } from 'react'
import "./App.css"
import LeftPart from './components/LeftPart/LeftPart'
import RightPart from './components/RightPart/RightPart'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
          <LeftPart />
          <RightPart />
      </div>
    )
  }
}
