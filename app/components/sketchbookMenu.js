'use strict';

const MenuSection = require('./MenuSection');
const React = require('react');

const SketchbookMenu = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <MenuSection>
          <div className="title">{this.props.title}</div>
        </MenuSection>
        {this.props.children}
      </div>
    );
  }
});

module.exports = SketchbookMenu;
