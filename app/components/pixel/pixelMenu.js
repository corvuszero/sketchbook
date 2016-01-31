'use strict';

const React = require('react');
const SketchbookMenu = require('../SketchbookMenu');
const MenuSection = require('../MenuSection'); 

const PixelMenu = React.createClass({
  propTypes: {
    onModelSelect: React.PropTypes.func.isRequired,
    onSkinSelect: React.PropTypes.func.isRequired,
    selectedModel: React.PropTypes.string.isRequired,
    selectedSkin: React.PropTypes.string.isRequired,
    selectorOptions: React.PropTypes.object.isRequired,
    title: React.PropTypes.string.isRequired
  },

  onModelSelect: function(event) {
    this.props.onModelSelect(event); 
  },

  onSkinSelect: function(event) {
    this.props.onSkinSelect(event); 
  },

  render: function() {
    return (
      <SketchbookMenu title={this.props.title}>
        <MenuSection>
          <label htmlFor="model">Model</label>
          <select 
            value={this.props.selectedModel} 
            onChange={this.onModelSelect}>
            {Object.keys(this.props.selectorOptions).map((function(name) {
              var model = this.props.selectorOptions[name];
              return (
                <option key={model.key} value={name}>
                  {name}
                </option>
              );
            }).bind(this))}
          </select>
          <label htmlFor="skin">Skin</label>
          <select
            value={this.props.selectedSkin}
            onChange={this.onSkinSelect}>
            {Object.keys(
              this.props.selectorOptions[this.props.selectedModel].skins
            ).map((function(skin) {
              return (
                <option key={skin} value={skin}>
                  {skin}
                </option>
              );
            }).bind(this))}
          </select>
        </MenuSection>
      </SketchbookMenu>
    );
  }
});

module.exports = PixelMenu;
