'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Sketchbook = require('./components/Sketchbook');

ReactDOM.render(
  React.createElement(Sketchbook),
  document.getElementById('root')
);