'use strict';

const React = require('react');

const cx = require('classnames');

const SketchbookApp = React.createClass({
  render: function() {
    return (
      <div className={cx("app")}>
        <div className={cx("flexWrapper")}>
          {this.props.children}
        </div>
      </div>  
    );        
  }
});

module.exports = SketchbookApp;
