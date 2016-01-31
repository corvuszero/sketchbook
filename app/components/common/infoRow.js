'use strict';

const React = require('react');

const InfoRow = React.createClass({
  render:function() {
    const labelValue = this.props.label.replace(' ', '').toLowerCase();

    return (
      <tr>
        <td>
          <label htmlFor={labelValue}>
            {this.props.label}
          </label>
        </td>
        <td>
          {this.props.children}
        </td>
      </tr>
    );        
  }
});

module.exports = InfoRow;
