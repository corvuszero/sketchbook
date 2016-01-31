'use strict';

const React = require('react');

const InfoTable = React.createClass({
  render:function() {
    return (
      <table>
        <tbody>
          {this.props.children}
        </tbody>
      </table>  
    );       
  }
});

module.exports = InfoTable;
