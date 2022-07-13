import React, { Component } from "react";
import List from "../List/List";
import Text from "../Text/Text";
import "./RightPart.css";

export default class RightPart extends Component {
  render() {
    return (
      <div className="right">
        <div className="third__circle"></div>
        <div className="name">
          Vitaliya
          Laschenko
        </div>
        <div className="front">
          front-end developer
        </div>
        <div className="education">
          <Text
            title="education"
            subtitle="belarusian state university"
            desc="2017 - 2021 |  Faculty of Applied Mathematics and Computer Science"
          />
        </div>
        <div className="skills">
        <List/>
        </div>
        <div className="courses">
          <Text
            title="courses"
            subtitle="IT school MelaRossa"
            desc="Front-end developer (In the process)"
          />
        </div>
      </div>
    );
  }
}
