import React from 'react';
import Clock from 'Clock';
import CountdownForm from './CountdownForm.jsx';

class Countdown extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
       count: 0
    }
  }

  setCountDown = (seconds) => {
    this.setState({
      count: seconds
    });
  }

  render() {
    var {count} = this.state;
    return(
      <div>
        <h1>Countdown</h1>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountDown={this.setCountDown} />
      </div>
    )
  };

}
export default Countdown;
// module.exports = Countdown;
