'use strict';

const NavBar = require('./NavBar');
const Pixel = require('./pixel/Pixel');
const React = require('react');

const Sketchbook = React.createClass({
  render: function() {
    return (
      <div className="container">
        <NavBar />
        <Pixel />
      </div>
    );
  }
});

module.exports = Sketchbook;
