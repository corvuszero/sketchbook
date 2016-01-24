'use strict';

const React = require('react');

const SketchbookMenu = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <h1 className="title">{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
});

module.exports = SketchbookMenu;