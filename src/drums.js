import React from 'react';
import './index.css';

// Drum machine Button Component emplimenting the button functionality
class Buttons extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    return(
      <section id='drum_buttoms'>
        {/* Row 1 with button Q W E */}
        <div id='qButton' className='drum-pad'  onClick=''><span>Q</span></div>
        <div id='wButton' className='drum-pad'  onClick=''>W</div>
        <div id='eButton' className='drum-pad'  onClick=''>E</div>
        {/* Row 2 with button A S D */}
        <div id='aButton' className='drum-pad'  onClick=''>A</div>
        <div id='sButton' className='drum-pad'  onClick=''>S</div>
        <div id='dButton' className='drum-pad'  onClick=''>D</div>
        {/* Row 2 with button Z X C */}
        <div id='zButton' className='drum-pad'  onClick=''>Z</div>
        <div id='xButton' className='drum-pad'  onClick=''>X</div>
        <div id='cButton' className='drum-pad'  onClick=''>C</div>
      </section>
    );
  }

}
// Volume slider with functionality
const Volume = (props)=>{
  return(
    <div id='volume'>
      <input type='range' min='0' max='1.0' step='0.1' name='scale' />
        <datalist id='scale'>
          <option value='0'/>
          <option value='0.5' />
          <option value='1.0' />
        </datalist>
      <div id='vText'>Volume</div>
    </div>
  );
}
// Power toggle switch for audio activation and deactivation
const Power = ()=>{
  return(
    <div id='power'>
      <input type='checkbox'/>
      <span ></span>
      <div> Power</div>
    </div>
  );
}
// Select type of audio
const Fx = ()=>{
  return(
    <div id='fx'>
      <input type='checkbox'/>
      <span ></span>
      <div> Fx</div>
    </div>
  );
}

export class Drums extends React.Component{
  constructor(props){
    super(props);
    this.state={clipName:'Play'};
  }


  render(){

    return(
      <div className="player-container">{/* Container with player elemants */}
        <div id='logo'>{/* Header with logo */}
          <i class="fa fa-grav" aria-hidden="true"></i>
          eFonic
        </div>
        <div id='display'>{this.state.clipName}</div> {/* Audio description Display */}
        <Buttons /> {/* Button Component emplimenting the button functionality */}
        <Volume />{/* Volume slider with functionality */}
        <Power />{/* Power toggle switch for audio activation and deactivation */ }
        <Fx /> {/* Select type of audio */}
        <div id='credits'><a href='https://github.com/nhope123/drums' tabIndex='0'> by Nial</a></div>
      </div>);
  }
}
