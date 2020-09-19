import React from 'react';
import 'regenerator-runtime/runtime'
import './index.css';
import {Switch, Volume} from './switch.js'
import {ButtonPad, fx1, fx2} from './drumPad.js';

// Main Drum Component enclosing all elements
export class Drums extends React.Component{
  constructor(props){
    super(props);
    this.state={
                trackTitle:''
              };
    this.setDisplay = this.setDisplay.bind(this);
    this.setFx      = this.setFx.bind(this);
    this.setMute    = this.setMute.bind(this);
    this.passVolume = this.passVolume.bind(this);
    this.switching  = this.switching.bind(this);
    this.switchPower= this.switchPower.bind(this);
    this.getVolume  = this.getVolume.bind(this);
    this.buttonRef  = React.createRef();
  }
  // Collect volume value from slider
  getVolume(event){
    this.passVolume(event.target.value);
  }
  // Toogle the mute switch on/off
  switchPower(event){
    var powerChoice = document.getElementById('mute');
    (powerChoice.checked)? ( this.setMute(false)) : ( this.setMute(true)) ;
  }
  // Toogle the Audio track list
  switching(){
    var fxChoice = document.getElementById('fxSwitch');
    (fxChoice.checked)? (this.setFx(fx1)) : (this.setFx(fx2)) ;
  }
  // Sets tack title display value
  setDisplay(val){
    this.setState(()=>{return{trackTitle: val}}); // this.props.title
  }
  // Sets the batch of sound to be played
  setFx(val){
    this.buttonRef.current.setTracks(val); // Passing track value to Button Component
  }
  // Set the muted value for all audio elements
  setMute(val){
    this.buttonRef.current.muteAudio(val); // Passing mute value to Button Component
  }
  passVolume(val){
    this.buttonRef.current.setVolume(val);
  }
  render(){
    var muteSwitch = {divId: 'power', inputId: 'mute',
                      callback: this.switchPower, text: 'On', label: 'Mute'};
    var fxSwitch   = {divId: 'fx', inputId: 'fxSwitch',
                      callback: this.switching, text: '', label: 'Fx'};

    var buttonProps = {setDisplay: this.setDisplay };
    return(
      <div className="player-container">{/* Container with player elements */}
        <div id='logo'>{/* Header with logo */}
          <i className="fa fa-grav" aria-hidden="true"></i>
          <a href='https://github.com/nhope123/drums' tabIndex='0' target='_blank'
              rel="noopener noreferrer" title='Github Repository'>eFonic</a>
        </div>
        <div id='display'>{this.state.trackTitle}</div> {/* Audio description Display */}
        <ButtonPad {...buttonProps} ref={this.buttonRef}/> {/* Button Component emplimenting the button functionality */}
        <Volume passVolume={this.getVolume} />{/* Volume slider with functionality */}
        <div id='switches' >
          <Switch {...muteSwitch}/>{/* Power toggle switch for audio activation and deactivation */ }
          <Switch { ...fxSwitch}/> {/* Select type of audio */}
        </div>
      </div>);
  }
}
