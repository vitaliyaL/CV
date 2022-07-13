import React, { Component } from "react";
import "./List.css"
export default class List extends Component {
  render() {
    return (
        <div>
        <div className="ul-title">Skills</div>
        <ul className="list">
          <li>JavaScript</li>
          <li>React</li>
          <li>Java</li>
          <li>HTML,CSS</li>
          <li>C++</li>
          <li>Assembler</li>
          <li>SQL</li>
          <li>WinAPI</li>
        </ul>
        </div>
    );
  }
}
