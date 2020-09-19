// Module containing buttons and button functionality
import React from 'react';
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
export let fx1 = {
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
export let fx2 = {
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
// Charcode link to the button ids
let charCodeValue = {81: idList[0], 87: idList[1], 69: idList[2], 65: idList[3],
                     83: idList[4], 68: idList[5], 90: idList[6], 88: idList[7],
                     67: idList[8]};

// Button component implimenting all drum button functions
class Button extends React.Component{

  render(){
    var audioId = this.props.audioId;
    var buttonId = 'button' + audioId;
    var containerId = (audioId.toLowerCase()) + 'Con';
    var loopClass = 'loop ' + this.props.fitloop;
    return(
      <div id={containerId}>
        {/*  button */}
        <button id={buttonId} type='button' className='drum-pad'  onClick={this.props.audio.playAudio}
                value={ audioId }  onKeyPress={this.props.audio.playAudio}>
          <audio  src={ this.props.audioSrc}  id={ audioId } className='clip' type={"audio/basic"} ></audio>
           {audioId }
        </button>
        <button type='button' className={loopClass} onClick={this.props.audio.setLoop} value={ audioId } >loop </button>
      </div>
    );
  }
}
// Drum machine Button Component emplimenting the button functionality
export class ButtonPad extends React.Component{
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
    this.setLoop   = this.setLoop.bind(this);
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
    if (event.type === 'click') { eventValue = event.target.value; }
    // Button selected by keyboard
    if (event.type === 'keypress') {
      eventValue = charCodeValue[event.charCode];
    }
    // Assign track title text for display when track is played
    if (eventValue !== 'error') {
      switch (eventValue) {
        case  idList[0] :
          this.runPlay(this.state.qSrc[1], eventValue);
          break;
        case  idList[1] :
          this.runPlay(this.state.wSrc[1], eventValue);
          break;
        case  idList[2] :
          this.runPlay(this.state.eSrc[1], eventValue);
          break;
        case idList[3] :
          this.runPlay(this.state.aSrc[1], eventValue);
          break;
        case idList[4] :
          this.runPlay(this.state.sSrc[1], eventValue);
          break;
        case idList[5] :
          this.runPlay(this.state.dSrc[1], eventValue);
          break;
        case idList[6] :
          this.runPlay(this.state.zSrc[1], eventValue);
          break;
        case idList[7] :
          this.runPlay(this.state.xSrc[1], eventValue);
          break;
        case idList[8] :
          this.runPlay(this.state.cSrc[1], eventValue);
          break;
        default:
          break;
      }
    }
  }
  //Display track title and play audio
  runPlay( state, id){
      this.props.setDisplay(state); // Display track
      var audioElement =  document.getElementById(id);
      // Stop track if palying, rewind and play track
      audioElement.pause();
      audioElement.currentTime = 0;
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
      <div id='drum_buttoms'>
        {/* Row 1 with button Q W E */}
        <Button {...{audio}} audioId={ idList[0]}  audioSrc={ this.state.qSrc[0]} fitloop={'left'} />
        <Button {...{audio}} audioId={ idList[1]}  audioSrc={ this.state.wSrc[0]} fitloop={'center'}/>
        <Button {...{audio}} audioId={ idList[2]}  audioSrc={ this.state.eSrc[0]} fitloop={'right'}/>
        {/* Row 2 with button A S D  */}
        <Button {...{audio}} audioId={ idList[3]}  audioSrc={ this.state.aSrc[0]} fitloop={'left'}/>
        <Button {...{audio}} audioId={ idList[4]}  audioSrc={ this.state.sSrc[0]} fitloop={'center'}/>
        <Button {...{audio}} audioId={ idList[5]}  audioSrc={ this.state.dSrc[0]} fitloop={'right'}/>
        {/* Row 3 with button Z X C */}
        <Button {...{audio}} audioId={ idList[6]}  audioSrc={ this.state.zSrc[0]} fitloop={'left'}/>
        <Button {...{audio}} audioId={ idList[7]}  audioSrc={ this.state.xSrc[0]} fitloop={'center'}/>
        <Button {...{audio}} audioId={ idList[8]}  audioSrc={ this.state.cSrc[0]} fitloop={'right'}/>
      </div>
    );
  }
}
