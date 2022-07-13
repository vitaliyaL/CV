import React, { Component } from "react";
import "./LeftPart.css";
import Text from "../Text/Text";
import photo from "../../assets/photo.JPG";
export default class LeftPart extends Component {
  render() {
    return (
      <div className="left">
        <div className="first__circle"></div>
        <div className="image"></div>
        <div className="aboutMe">
          <Text
            title="about myself"
            desc="I first got acquainted with programming at the university in 2017. There I studied different programming languages. I also graduated from the Streamline foreign language school with obtaining a B2 level certificate."
          />
        </div>
        <div className="projects">
          <Text
            title="projects"
            link="https://vitaliyal-makes-great-sites.netlify.app/"
            desc_link="Weather"
          />
        </div>
        <div className="contacts">
          <Text
            title="contacts"
            link="tel:+375291373738"
            desc_link="+375 (29) 137-37-38"
            link2="mailto:vita0623@mail.ru"
            desc_link2="vita0623@mail.ru"
          />
        </div>
        <div className="second__circle"></div>
      </div>
    );
  }
}
