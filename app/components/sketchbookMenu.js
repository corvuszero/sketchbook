'use strict';

const React = require('react');
const MenuSection = require('./MenuSection');

const cx = require('classnames');

const SketchbookMenu = React.createClass({
  render: function() {
    return (
      <div className={cx("menu")}>
        <MenuSection>
          <div className={cx("title")}>{this.props.title}</div>
        </MenuSection>
        {this.props.children}
      </div>
    );
  }
});

module.exports = SketchbookMenu;
