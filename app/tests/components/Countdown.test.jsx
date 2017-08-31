var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
import Countdown from 'Countdown';

describe('Countdown', ()=>{
  it('should be exist', ()=>{
    expect(Countdown).toExist();
  });

  describe('handleSetCountDown', ()=>{
    it('should state to started and countdown', (done)=>{
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.setCountDown(10);
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(()=>{
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });

    it('should countdown not negative', (done)=>{
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.setCountDown(1);

      setTimeout(()=>{
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });
  });

});
