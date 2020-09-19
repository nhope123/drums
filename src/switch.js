// Module containing Volume, Mute and Fx controls
import React from 'react';

// Switch Component manages operation with 2 options
export class Switch extends React.Component{
  render(){
    return(
      <div id={this.props.divId}>
        <label htmlFor={this.props.inputId} className='switch'  >
          <input type='checkbox' id={this.props.inputId}  />
          <span className='slider round' onClick={this.props.callback}>{this.props.text}</span>
        </label>
        <div>{this.props.label}</div>
      </div>
    );
  }
}
// Volume slider with functionality
export class Volume extends React.Component{
  render(){
    return(
      <div id='volume'>
        <input type='range' min='0' max='1.0' step='0.1' name='scale' onChange={this.props.passVolume} list='levels'   />
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
