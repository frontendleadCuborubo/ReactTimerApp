import React from 'react';

class Controls extends React.Component{

  constructor(props) {
    super(props)
  }

  static propTypes = {
      countdownStatus: React.PropTypes.string.isRequired,
      onStatusChange: React.PropTypes.func.isRequired,
  }

  componentWillReceiveProps(newProps){
    console.log('componentWillReceiveProps', newProps.countdownStatus);
  }
  onStatusChange = (newStatus) => {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  }

  render(){
    var {countdownStatus} = this.props;
    var renderStopStartbtn = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      }else if (countdownStatus === 'paused') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    }
    return(
      <div className="controls">
        {renderStopStartbtn()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  };
}

export default Controls;
