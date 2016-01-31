'use strict';

const InfoTable = require('../common/InfoTable');
const InfoRow = require('../common/InfoRow');
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
          <InfoTable>
            <InfoRow label="Model">
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
            </InfoRow>
            <InfoRow label="Skin">
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
            </InfoRow>
          </InfoTable>
        </MenuSection>
      </SketchbookMenu>
    );
  }
});

module.exports = PixelMenu;
