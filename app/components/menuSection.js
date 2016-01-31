'use strict';

const React = require('react');

const MenuSection = React.createClass({
  render: function() {
    return (
      <div className="menuSection">
        {this.props.children}
      </div>
    );        
  }
});

module.exports = MenuSection;
