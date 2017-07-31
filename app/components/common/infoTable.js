'use strict';

const React = require('react');

const cx = require('classnames');

const InfoTable = React.createClass({
  render:function() {
    return (
      <table className={cx("infoTable")}>
        <tbody>
          {this.props.children}
        </tbody>
      </table>  
    );       
  }
});

module.exports = InfoTable;
