import React, { useRef, useEffect, memo, CSSProperties } from 'react';

import './styles.css';
import lightSwitchSound from '../../assets/light-pull2.mp3'

const audioLightSwitchSound = new Audio(lightSwitchSound);
audioLightSwitchSound.load();

class Bulb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      on: props.on,
      initialRender: true
    };
    this.toggleLight = this.toggleLight.bind(this);
  }

  toggleLight(e) {
    audioLightSwitchSound.pause();
    audioLightSwitchSound.currentTime = 0;
    audioLightSwitchSound.play();

    this.props.onToggle(!this.state.on);

    this.setState(prevState => ({
      on: !prevState.on,
      initialRender: false,
    }));
  }

  render() {
    let finalClassName = 'off';
    if (this.state.on) {
      finalClassName = '';
    }

    let pullCordPosition = '';
    if (!this.state.initialRender) {
      pullCordPosition = this.state.on ? 'low' : 'high';
    }

    return (
      <div>
        <div className='pull-cord-container' onClick={this.toggleLight}>

          <div className={`pull-cord ${pullCordPosition}`} />
          <div className='gullumuxhi'></div>
        </div>
        <div className='container'>
          <div className={`bulb ${finalClassName}`}>
            <div className={`filaments ${finalClassName}`}></div>
          </div>
        </div>
      </div>);
  }
}

export default Bulb;