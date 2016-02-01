'use strict';

const React = require('react');

const InfoTable = React.createClass({
  render:function() {
    return (
      <table className="infoTable">
        <tbody>
          {this.props.children}
        </tbody>
      </table>  
    );       
  }
});

module.exports = InfoTable;
