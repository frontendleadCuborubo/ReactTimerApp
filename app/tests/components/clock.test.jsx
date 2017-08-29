var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
import Clock from 'Clock';

describe('Clock', ()=>{
  it('should be exist', ()=>{
    expect(Clock).toExist();
  });

  describe('render', ()=>{
    it('it should render clock ', ()=>{
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();
      expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds', ()=>{
    it('should format seconds', ()=>{
      var clock = TestUtils.renderIntoDocument(<Clock />);
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
  });

});
