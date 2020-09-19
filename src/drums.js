import React from 'react';
import 'regenerator-runtime/runtime'
import './index.css';
// Audio Import
import heat1 from './audio/Heater-1.mp3';
import heat2 from './audio/Heater-2.mp3';
import heat3 from './audio/Heater-3.mp3';
import heat4 from './audio/Heater-4_1.mp3';
import heat6 from './audio/Heater-6.mp3';
import dsc   from './audio/Dsc_Oh.mp3';
import kick  from './audio/Kick_n_Hat.mp3';
import chor2 from './audio/Chord_2.mp3';
import chor3 from './audio/Chord_3.mp3';

import ray   from './audio/TRACKER.mp3';
import boing from './audio/TWINGY.mp3';
import quikW from './audio/UPPER.mp3';
import beep  from './audio/TINK.mp3';
import plink from './audio/PLINK.mp3';
import pop   from './audio/POP.mp3';
import swish from './audio/SWISH__1.mp3';
import light from './audio/Give_us_a_light.mp3';
import chor1 from './audio/Chord_1.mp3';

// First audio list
let fx1 = {
  qAudio: [ heat1,'Fine Q'],
  wAudio: [ heat2,'Skat'],
  eAudio: [ heat3,'Pley'],
  aAudio: [ heat4,'Pring'],
  sAudio: [ heat6,'Splack'],
  dAudio: [ dsc, 'Dsc Oh'],
  zAudio: [ kick,'Kick n Hat'],
  xAudio: [ chor2,'X-bate'],
  cAudio: [ chor3,' C Chord']
};
// Second audio list
let fx2 = {
  qAudio: [ ray,'Futuristic Ray'],
  wAudio: [ boing,'Boing'],
  eAudio: [ quikW,'Quick Whistle'],
  aAudio: [ beep,'Quick Beep'],
  sAudio: [ plink,'Plink'],
  dAudio: [ pop, 'Pop'],
  zAudio: [ swish,'Swish'],
  xAudio: [ light,'Give us a light'],
  cAudio: [ chor1,'End Chord ']
};
// List of Button audio element ids
let idList = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

// Button component implimenting all drum button functions
class Button extends React.Component{

  render(){
    //var theSrc = this.props.audioSrc;
    return(
      <div id={this.props.containerId}>
        {/*  button */}
        <button id={this.props.buttonId} type='button' className='drum-pad'  onClick={this.props.audio.playAudio} value={ this.props.audioId }  onKeyPress={this.props.audio.playAudio}>
          <audio  src={ this.props.audioSrc}  id={ this.props.audioId } className='clip' type={"audio/basic"} ></audio>
           {this.props.audioId }
        </button>
        <button type='button' className='left loop' onClick={this.props.audio.setLoop} value={ this.props.audioId } >loop </button>
      </div>
    );
  }
}
// Drum machine Button Component emplimenting the button functionality
class ButtonPad extends React.Component{
  constructor(props){
    super(props);
    this.state={
                qSrc: fx1.qAudio, wSrc: fx1.wAudio, eSrc: fx1.eAudio,
                aSrc: fx1.aAudio, sSrc: fx1.sAudio, dSrc: fx1.dAudio,
                zSrc: fx1.zAudio, xSrc: fx1.xAudio, cSrc: fx1.cAudio,
                loop: false
    };
    this.playAudio = this.playAudio.bind(this);
    this.setTracks = this.setTracks.bind(this);
    this.muteAudio = this.muteAudio.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.setLoop = this.setLoop.bind(this);
  }
  // Set the values for the audio elements loop attribute
  setLoop(event){
    var element = document.getElementById(event.target.value);
    if (element.hasAttribute('loop') === false) {
      element.setAttribute('loop','true');
      event.currentTarget.classList.add('active-loop');
    } else {
      element.removeAttribute('loop');
      event.currentTarget.classList.remove('active-loop');
    }
  }
  // Set the values for the button tracks
  setTracks(val){
    this.setState({
                    qSrc: val.qAudio, wSrc: val.wAudio, eSrc: val.eAudio,
                    aSrc: val.aAudio, sSrc: val.sAudio, dSrc: val.dAudio,
                    zSrc: val.zAudio, xSrc: val.xAudio, cSrc: val.cAudio
    });
    // Reload all audio buttons when new track are loaded
  idList.map((item) => { document.getElementById(item).load(); return 1;});
  }
  // set the volume of all audio elements
  setVolume(val){
    // Set volumeof all audio elements to val
    idList.map((item) => { document.getElementById(item).volume = val; return 1;});
  }
  // muteAudio function toogle the muted attribute for all audio elements
  muteAudio(val){
    if (val === true) {
      idList.map((item) => {
        document.getElementById(item).muted = true;
        return 1;
      });
    } else {
      idList.map((item) => {
        document.getElementById(item).muted = false;
        return 1;
      });
    }
  }
  // playAudio function plays selected audio and pass the track title for display
  playAudio(event){
    var eventValue; // Value from the button pressed
    // Button selected by clicking
    if (event.type === 'click') {
      eventValue= event.target.value;
    }
    // Button selected by keyboard
    if (event.type === 'keypress') {
      switch (event.charCode) {
        case 81 :   // key Q
          eventValue= idList[0];
          break;
        case 87:   // key W
          eventValue=  idList[1] ;
          break;
        case 69:   // key E
          eventValue= idList[2] ;
          break;
        case 65:    // key A
          eventValue= idList[3] ;
          break;
        case 83:   // key S
          eventValue= idList[4] ;
          break;
        case 68:   // key D
          eventValue= idList[5] ;
          break;
        case 90:   // key Z
          eventValue= idList[6] ;
          break;
        case 88:   // key X
          eventValue= idList[7] ;
          break;
        case 67:   // key C
          eventValue= idList[8];
          break;
        default:  // If other key press do nothing
          eventValue='error';
      }
    }

    // Assign track title text for display when track is played
    if (eventValue !== 'error') {
      switch (eventValue) {
        case  idList[0] :
          this.runPlay(this.state.qSrc[1], eventValue);
          /* this.props.setDisplay(this.state.qSrc[1]);
          document.getElementById(eventValue).play(); */
          break;
        case  idList[1] :
          this.runPlay(this.state.wSrc[1], eventValue);
          /* this.props.setDisplay(this.state.wSrc[1]);
          document.getElementById(eventValue).play(); */
          break;
        case  idList[2] :
          this.runPlay(this.state.eSrc[1], eventValue);
          /* this.props.setDisplay(this.state.eSrc[1]);
          document.getElementById(eventValue).play */
          break;
        case idList[3] :
          this.runPlay(this.state.aSrc[1], eventValue);
          /* this.props.setDisplay(this.state.aSrc[1]);
          document.getElementById(eventValue).play(); */
          break;
        case idList[4] :
          this.runPlay(this.state.sSrc[1], eventValue);
          /* this.props.setDisplay(this.state.sSrc[1]);
          document.getElementById(eventValue).play(); */
          break;
        case idList[5] :
          this.runPlay(this.state.dSrc[1], eventValue);
          /* this.props.setDisplay(this.state.dSrc[1]);
          document.getElementById(eventValue).play(); */
          break;
        case idList[6] :
          this.runPlay(this.state.zSrc[1], eventValue);
          /* this.props.setDisplay(this.state.zSrc[1]);
          document.getElementById(eventValue).play(); */
          break;
        case idList[7] :
          this.runPlay(this.state.xSrc[1], eventValue);
          /* this.props.setDisplay(this.state.xSrc[1]);
          document.getElementById(eventValue).play(); */
          break;
        case idList[8] :
          this.runPlay(this.state.cSrc[1], eventValue);
          //this.props.setDisplay(this.state.cSrc[1]);
          //document.getElementById(eventValue).play(); */
          break;
        default:
          break;
      }
       // Play audio for that button
    }
  }
  runPlay( state, id){
      this.props.setDisplay(state);
      var audioElement =  document.getElementById(id);
    //  audioElement.onplaying = function(){
        audioElement.pause();
        audioElement.currentTime = 0;
    //  }
      var playPromise =audioElement.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          console.log(id);
        }).catch(err => {console.log(err);});
      }
  }
  render(){
    window.addEventListener('keypress', this.playAudio);
    let audio = {
      playAudio: this.playAudio,
      setLoop: this.setLoop
    };
    return(
      <section id='drum_buttoms'>
        {/* button props list
                              audioId: idList[0] (the value changes for each button
                              displayValue: val (button letters)
                              audioSrc: this.state.qSrc[0] (the sorce for each audio button)
                              containerId: 'qCon' (id for each button container)
                               buttonId: 'buttonQ' (unique button id)
        */}
        {/* Row 1 with button Q W E */}
        <Button {...{audio}} audioId={ idList[0]} displayValue={ 'Q' } audioSrc={ this.state.qSrc[0]} containerId={'qCon'} buttonId={'buttonQ'}/>
        <Button {...{audio}} audioId={ idList[1]} displayValue={ 'W' } audioSrc={ this.state.wSrc[0]} containerId={'wCon'} buttonId={'buttonW'}/>
        <Button {...{audio}} audioId={ idList[2]} displayValue={ 'E' } audioSrc={ this.state.eSrc[0]} containerId={'eCon'} buttonId={'buttonE'}/>
        {/* Row 2 with button A S D  */}
        <Button {...{audio}} audioId={ idList[3]} displayValue={ 'A' } audioSrc={ this.state.aSrc[0]} containerId={'aCon'} buttonId={'buttonA'}/>
        <Button {...{audio}} audioId={ idList[4]} displayValue={ 'S' } audioSrc={ this.state.sSrc[0]} containerId={'sCon'} buttonId={'buttonS'}/>
        <Button {...{audio}} audioId={ idList[5]} displayValue={ 'D' } audioSrc={ this.state.dSrc[0]} containerId={'dCon'} buttonId={'buttonD'}/>
        {/* Row 3 with button Z X C */}
        <Button {...{audio}} audioId={ idList[6]} displayValue={ 'Z' } audioSrc={ this.state.zSrc[0]} containerId={'zCon'} buttonId={'buttonZ'}/>
        <Button {...{audio}} audioId={ idList[7]} displayValue={ 'X' } audioSrc={ this.state.xSrc[0]} containerId={'xCon'} buttonId={'buttonX'}/>
        <Button {...{audio}} audioId={ idList[8]} displayValue={ 'C' } audioSrc={ this.state.cSrc[0]} containerId={'cCon'} buttonId={'buttonC'}/>

      </section>
    );
  }

}
// Volume slider with functionality
class Volume extends React.Component{
  constructor(props){
    super(props);
    this.getVolume = this.getVolume.bind(this);
  }
  // Collect volume value from slider
  getVolume(event){
    this.props.passVolume(event.target.value);
  }
  render(){
    return(
      <div id='volume'>
        <input type='range' min='0' max='1.0' step='0.1' name='scale' onChange={this.getVolume} list='levels' style={{
          backgroundColor: 'red', color: 'black'
        }}/>
        <datalist id='levels'>
          <option value='0' />
          <option value='0.5' />
          <option value='1' />
        </datalist>
        <div id='vText'>Volume</div>
      </div>
    );
  }
}
// Power toggle switch for audio activation and deactivation
class Power extends React.Component{
  constructor(props){
    super(props);
    this.switchPower = this.switchPower.bind(this);
  }
  // Toogle the mute switch on/off
  switchPower(event){
    var powerChoice = document.getElementById('mute');
      // Power switch is checked mute all audio
      if (powerChoice.checked) {
        this.props.setMute(false);
      }
      // Power switch unchecked unmute all audio
      else{ this.props.setMute(true); }
  }
  render(){
    return(
      <div id='power'>
        <label className='switch' htmlFor='mute' >
          <input type='checkbox' id='mute'/>
          <span className='slider round' onClick={this.switchPower} ></span>
        </label>
        <div> Mute</div>
      </div>
    );
  }
}
// Select type of audio
class Fx extends React.Component{
  constructor(props){
    super(props);
    this.switching = this.switching.bind(this);
  }
  // Toogle the Audio track list
  switching(){
    var fxChoice = document.getElementById('fxSwitch');
      // FX switch is checked load first sound list
      if (fxChoice.checked) { this.props.setFx(fx1); }
      // FX switch is unchecked load second sound list
      else{ this.props.setFx(fx2); }
  }
  render(){
    return(
      <div id='fx'>
        <label htmlFor='fxSwitch' className='switch'  >
          <input type='checkbox' id='fxSwitch'  />
          <span className='slider round on' onClick={this.switching}>On</span>
          {/* <span className='slider round off'>Off</span> */}
        </label>
        <div> Fx</div>
      </div>
    );
  }
}

export class Drums extends React.Component{
  constructor(props){
    super(props);
    this.state={
                trackTitle:''
              };
    this.setDisplay = this.setDisplay.bind(this);
    this.setFx = this.setFx.bind(this);
    this.setMute = this.setMute.bind(this);
    this.passVolume = this.passVolume.bind(this);
    this.buttonRef = React.createRef();
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
    //console.log(this.state.fxBatch);
    var buttonProps = {setDisplay: this.setDisplay };
    return(
      <div className="player-container">{/* Container with player elements */}
        <div id='logo'>{/* Header with logo */}
          <i className="fa fa-grav" aria-hidden="true"></i>
          <a href='https://github.com/nhope123/drums' tabIndex='0' target='_blank' rel="noopener noreferrer" title='Github Repository'>eFonic</a>
        </div>
        <div id='display'>{this.state.trackTitle}</div> {/* Audio description Display */}
        <ButtonPad {...buttonProps} ref={this.buttonRef}/> {/* Button Component emplimenting the button functionality */}
        <Volume passVolume={this.passVolume} />{/* Volume slider with functionality */}
        <div id='switches' >
          <Power setMute={this.setMute}/>{/* Power toggle switch for audio activation and deactivation */ }
          <Fx setFx={this.setFx}/> {/* Select type of audio */}
        </div>
      </div>);
  }
}
