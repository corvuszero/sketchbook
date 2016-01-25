'use strict';

const Pixel = require('./pixel/Pixel');
const React = require('react');

const Sketchbook = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Pixel />
      </div>
    );
  }
});

module.exports = Sketchbook;
