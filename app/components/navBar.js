'use strict';

const React = require('react');

const cx = require('classnames');

const NavBar = React.createClass({
  render:function() {
    return (
      <div className={cx("navBar")}>
        <h1>Sketchbook</h1>
      </div>
    );
  }
});

module.exports = NavBar;
