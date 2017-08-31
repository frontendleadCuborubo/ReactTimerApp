import React from 'react';
import Clock from 'Clock';
import CountdownForm from './CountdownForm.jsx';
import Controls from './Controls.jsx';

class Countdown extends React.Component{

  constructor(props) {
    super(props)
    this.startTimer = this.startTimer.bind(this);
    this.state = {
       count: 0,
       countdownStatus: 'stopped',
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count : 0
          });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  }

  // componentWillUpdate(nextProps, nextState){
  //   // console.log(nextProps);
  //   // console.log(nextState);
  //   // console.log('componentWillUpdate');
  // }
  // componentWillMount(){
  //   console.log('1 - componentWillMount');
  // }
  // componentDidMount(){
  //   console.log('2 - componentDidMount');
  // }
  componentWillUnmount(){
    console.log('Before hide - componentWillUnmount');
    clearInterval(this.timer);
    this.timer = undefined;
  }

  startTimer(){
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >=0 ? newCount : 0,
      });
      if (newCount == 0) {
        this.setState({
          countdownStatus: 'stopped'
        });
      }
    }, 1000);
  }

  setCountDown = (seconds) => {
    this.setState({
      count: seconds,
      countdownStatus: 'started',
    });
  }

  handleStatusChange = (newStatus) =>{
    this.setState({
      countdownStatus: newStatus,
    });
  }

  render() {
    var {count, countdownStatus} = this.state;

    var renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
      }else{
        return <CountdownForm onSetCountDown={this.setCountDown} />
      }
    }

    return(
      <div>
        <h1>Countdown</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    )
  };

}
export default Countdown;
// module.exports = Countdown;
