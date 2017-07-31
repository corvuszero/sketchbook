'use strict';

const NavBar = require('./NavBar');
const Pixel = require('./pixel/Pixel');
const React = require('react');

const cx = require('classnames');

const Sketchbook = React.createClass({
  render: function() {
    return (
      <div className={cx("container")}>
        <NavBar />
        <Pixel />
      </div>
    );
  }
});

module.exports = Sketchbook;
