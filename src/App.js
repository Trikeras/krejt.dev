import './App.css';

import TypeAnimation from "./components/typing"
import Bulb from "./components/bulb"
import AboutUs from "./page/about-us"
import React from 'react';

import { getQuestions } from "./utils/questions"
class App extends React.Component {

  constructor(props) {
    super(props);
    this.typingtext = React.createRef();
    this.state = {
      isTextHovered: false,
      isButtonHovered: false,
      opacity: 0.9,
      solved: false,
      pressedP: false,
      pressedO: false,
    };
    this.setIsTextHovered = this.setIsTextHovered.bind(this);
    this.setAreButtonsHovered = this.setAreButtonsHovered.bind(this);
    this.setKeyPressed = this.setKeyPressed.bind(this);
    this.waitOnHover = this.waitOnHover.bind(this);
    this.setOpacity = this.setOpacity.bind(this);
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


  setIsTextHovered(isTextHovered) {
    let delay = isTextHovered ? 150 : 2000

    setTimeout(() => {
      console.log("STATE Text " + isTextHovered)
      //this.state.isTextHovered = isTextHovered;
      this.setState(prevState => ({
        isTextHovered: isTextHovered
      }));
    }, delay);
  }

  setAreButtonsHovered(isButtonHovered) {
    let delay = isButtonHovered ? 150 : 2000

    setTimeout(() => {
      console.log("STATE BUTTON " + isButtonHovered)
      this.state.isButtonHovered = isButtonHovered
      this.setState(prevState => ({
        isButtonHovered: isButtonHovered
      }));
    }, delay);
  }

  waitOnHover() {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        if (this.state.isTextHovered === false &&
          this.state.isButtonHovered == false) {
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

  render() {
    let comp1 = (
      <div className="App">
        <div style={{ position: 'absolute', left: '70%', top: '3%' }}>
          <Bulb onToggle={isOn => this.setOpacity(isOn)} />
        </div>

        <div style={{ position: 'absolute', left: '20%', top: '45%' }}
          onMouseEnter={() => this.setIsTextHovered(true)}
          onMouseLeave={() => this.setIsTextHovered(false)}>

          <TypeAnimation
            cursor={true}
            sequence={getQuestions(this.waitOnHover)}
            wrapper="a"
            repeat={Infinity}
          />

          <div className={'response-div' + (this.state.isButtonHovered || this.state.isTextHovered ? "" : " off")}
            onMouseEnter={() => this.setAreButtonsHovered(true)}
            onMouseLeave={() => this.setAreButtonsHovered(false)}>
            <button className='raise'>Po</button>
            <button className='raise'>Jo</button>
          </div>

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
