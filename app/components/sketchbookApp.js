'use strict';

const React = require('react');

const SketchbookApp = React.createClass({
  render: function() {
    return (
      <div className="app">
        <div className="flexWrapper">
          {this.props.children}
        </div>
      </div>  
    );        
  }
});

module.exports = SketchbookApp;
