import React from 'react';
import Clock from './Clock';

export default class Timer extends React.Component{

  constructor() {
    super()
    //this.state = { width: 0 }
  }

  render() {
    return(
      <div>
        <h1>Timer</h1>
        <Clock />
      </div>
    )
  };

}

// module.exports = Timer;
