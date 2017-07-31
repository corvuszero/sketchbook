'use strict';

const React = require('react');

const cx = require('classnames');

const MenuSection = React.createClass({
  render: function() {
    return (
      <div className={cx("menuSection")}>
        {this.props.children}
      </div>
    );        
  }
});

module.exports = MenuSection;
