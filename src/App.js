import './App.css';

import TypeAnimation from "./components/typing"
import Bulb from "./components/bulb"
import AboutUs from "./page/about-us"
import React from 'react';

import { getQuestions } from "./utils/questions"
import { isMobile } from 'react-device-detect';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.typingtext = React.createRef();
    this.state = {
      isTextHovered: false,
      opacity: 0.9,
      solved: false,
      pressedP: false,
      pressedO: false,
      isJoClicked: false
    };
    this.setIsTextHovered = this.setIsTextHovered.bind(this);
    this.setKeyPressed = this.setKeyPressed.bind(this);
    this.waitOnHover = this.waitOnHover.bind(this);
    this.setOpacity = this.setOpacity.bind(this);
    this.onPoClick = this.onPoClick.bind(this);
    this.onJoClick = this.onJoClick.bind(this);
  }

  setKeyPressed(key) {
    if (key === "P") {
      this.setState(() => ({
        pressedP: true
      }))
    }
    else if (key === "O") {
      this.setState(() => ({
        pressedO: true
      }))
    }
  }

  componentDidMount() {
    const keyPress = this.setKeyPressed
    document.addEventListener('keyup', function (event) {
      if (event.key.toUpperCase() == "P") {
        keyPress("P");
      }
      if (event.key.toUpperCase() == "O") {
        keyPress("O");
      }
    })
  }

  setIsTextHovered() {
    this.setState(prevState => ({
      isTextHovered: true
    }));
  }

  waitOnHover() {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        if (this.state.isTextHovered === false) {
          resolve("")
        }
      }, 50);
    })
  }

  setOpacity(isOn) {
    this.setState(() => ({
      opacity: (isOn ? 0.75 : 0.93)
    }))
  }

  onPoClick() {
    this.setState(() => ({
      pressedP: true
    }))
    this.setState(() => ({
      pressedO: true
    }))
  }

  onJoClick() {
    this.setState(() => ({
      isJoClicked: false
    }))

    this.setState(prevState => ({
      isTextHovered: false
    }));
  }

  render() {
    let comp1 = (
      <div className="App">
        <div className='bulb-position'>
          <Bulb onToggle={isOn => this.setOpacity(isOn)} />
        </div>

        <div id={isMobile ? 'mobile-type-animation' : 'type-animation'}>
          <div onMouseEnter={(e) => this.setIsTextHovered()}>
            <TypeAnimation
              cursor={true}
              sequence={getQuestions(this.waitOnHover)}
              wrapper="a"
              repeat={Infinity}
            />
          </div>
          {isMobile &&
            <div className={'response-div' + (this.state.isTextHovered ? "" : " off")}>
              <button className='raise' hidden={this.state.isJoClicked} onClick={this.onPoClick}>Po</button>
              <button className='raise' hidden={this.state.isJoClicked} onClick={this.onJoClick}>Jo</button>
            </div>
          }

        </div>
      </div>);

    let comp2 = (
      <AboutUs />);
    return [
      <div className="overlay" style={{ '--opacity': this.state.opacity }}></div>,
      (this.state.pressedO && this.state.pressedP ? comp2 : comp1)];
  }

}

export default React.memo(App);
