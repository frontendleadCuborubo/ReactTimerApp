var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
import Controls from 'Controls';

describe('Controls', ()=>{
  it('should be exist', ()=>{
    expect(Controls).toExist();
  });

  describe('render', ()=>{
    it('should render paused when started', ()=>{
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseBtn = $el.find('button:contains(Pause)');
      expect($pauseBtn.length).toBe(1);
    });

    it('should render paused when paused', ()=>{
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $startBtn = $el.find('button:contains(Start)');
      expect($startBtn.length).toBe(1);
    });
  });
});
