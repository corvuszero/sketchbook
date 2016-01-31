'use strict';

const React = require('react');
const PixelCanvas = require('./PixelCanvas');
const SketchbookApp = require('../SketchbookApp');
const SketchbookMenu = require('../SketchbookMenu');

const Pixel = React.createClass({
  getInitialState: function() {
    return {
      selectorOptions : {
        'Mario' : {
          key : 0,
          pixels : [
            ['0', '0', '0', '1', '1', '1', '1', '1', '0', '0', '0', '0'],
            ['0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0'],
            ['0', '0', '2', '2', '2', '3', '3', '2', '3', '0', '0', '0'],
            ['0', '2', '3', '2', '3', '3', '3', '2', '3', '3', '3', '0'],
            ['0', '2', '3', '2', '2', '3', '3', '3', '2', '3', '3', '3'],
            ['0', '2', '2', '3', '3', '3', '3', '2', '2', '2', '2', '0'],
            ['0', '0', '0', '3', '3', '3', '3', '3', '3', '3', '0', '0'],
            ['0', '0', '2', '2', '1', '2', '2', '2', '0', '0', '0', '0'],
            ['0', '2', '2', '2', '1', '2', '2', '1', '2', '2', '2', '0'],
            ['2', '2', '2', '2', '1', '1', '1', '1', '2', '2', '2', '2'],
            ['3', '3', '2', '1', '3', '1', '1', '3', '1', '2', '3', '3'],
            ['3', '3', '3', '1', '1', '1', '1', '1', '1', '3', '3', '3'],
            ['3', '3', '1', '1', '1', '1', '1', '1', '1', '1', '3', '3'],
            ['0', '0', '1', '1', '1', '0', '0', '1', '1', '1', '0', '0'],
            ['0', '2', '2', '2', '0', '0', '0', '0', '2', '2', '2', '0'],
            ['2', '2', '2', '2', '0', '0', '0', '0', '2', '2', '2', '2']
         ],
         skins : {
          normal : {
            '0' : 'skip',
            '1' : '#d80000',
            '2' : '#706800',
            '3' : '#f8ab00'
          },
          luigi : {
            '0' : 'skip',
            '1' : '#fcfcfc',
            '2' : '#009300',
            '3' : '#f8ab00'
          }
         }
        },
        'Megaman' : {
          key : 1,
          pixels : [
            ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '2', '2', '1', '0', '0', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '0', '1', '3', '3', '3', '1', '2', '2', '1', '0', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '1', '3', '3', '3', '3', '3', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '1', '3', '3', '3', '3', '3', '1', '2', '2', '3', '1', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '1', '2', '3', '3', '3', '3', '3', '3', '1', '1', '3', '1', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '1', '2', '3', '3', '4', '5', '5', '5', '3', '3', '5', '1', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '1', '2', '3', '4', '5', '5', '1', '1', '4', '1', '5', '1', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '1', '3', '4', '5', '5', '1', '1', '4', '1', '5', '1', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '1', '1', '3', '4', '4', '5', '5', '5', '4', '5', '5', '1', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '1', '1', '2', '2', '1', '3', '4', '1', '1', '1', '1', '4', '1', '1', '1', '0', '0', '0', '0'],
            ['0', '0', '0', '1', '3', '2', '2', '2', '2', '1', '4', '4', '4', '4', '4', '1', '2', '2', '3', '1', '0', '0', '0'],
            ['0', '0', '0', '1', '3', '3', '2', '2', '2', '2', '1', '1', '1', '1', '1', '2', '2', '3', '3', '1', '0', '0', '0'],
            ['0', '0', '1', '3', '3', '3', '2', '1', '2', '2', '2', '2', '2', '2', '2', '1', '2', '3', '3', '3', '1', '0', '0'],
            ['0', '0', '1', '3', '3', '1', '1', '1', '2', '2', '2', '2', '2', '2', '2', '1', '1', '1', '3', '3', '1', '0', '0'],
            ['0', '0', '1', '3', '3', '3', '1', '1', '2', '2', '2', '2', '2', '2', '2', '1', '1', '3', '3', '3', '1', '0', '0'],
            ['0', '0', '1', '3', '3', '3', '1', '1', '3', '3', '3', '3', '3', '3', '3', '1', '1', '3', '3', '3', '1', '0', '0'],
            ['0', '0', '0', '1', '1', '1', '0', '1', '3', '3', '3', '3', '3', '3', '3', '1', '0', '1', '1', '1', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '1', '2', '2', '3', '3', '3', '3', '2', '2', '2', '1', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '1', '3', '3', '2', '2', '2', '1', '2', '2', '2', '2', '3', '1', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '1', '1', '3', '3', '3', '2', '1', '0', '1', '2', '3', '3', '3', '1', '1', '0', '0', '0', '0'],
            ['0', '0', '1', '1', '3', '3', '3', '3', '3', '1', '0', '0', '0', '1', '3', '3', '3', '3', '3', '1', '1', '0', '0'],
            ['0', '1', '3', '3', '3', '3', '3', '3', '3', '1', '0', '0', '0', '1', '3', '3', '3', '3', '3', '3', '3', '1', '0'],
            ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0'],
         ],
         skins : {
          normal : {
            '0' : 'skip',
            '1' : '#000000',
            '2' : '#00faff',
            '3' : '#007fff',
            '4' : '#ffd9cc',
            '5' : '#ffffff',
          },
          metal : {
            '0' : 'skip',
            '1' : '#000000',
            '2' : '#ffe984',
            '3' : '#90810e',
            '4' : '#ffd9cc',
            '5' : '#ffffff',
          }
         }
        }
      },
      selectedModel : 'Mario',
      selectedSkin : 'normal',
      title : "Pixel"
    }
  },

  onModelSelect: function(event) {
    this.setState({
      selectedModel : event.target.value,
      selectedSkin : 'normal'
    });
  },

  onSkinSelect: function(event) {
    this.setState({
      selectedSkin : event.target.value
    });
  },

  render: function() {
    return (
      <SketchbookApp>
        <SketchbookMenu title={this.state.title}>
          <div>
            <label htmlFor="model">Model</label>
            <select 
              value={this.state.selectedModel} 
              onChange={this.onModelSelect}>
              {Object.keys(this.state.selectorOptions).map((function(name) {
                var model = this.state.selectorOptions[name];
                return (
                  <option key={model.key} value={name}>
                    {name}
                  </option>
                );
              }).bind(this))}
            </select>
          </div>
          <div>
            <label htmlFor="skin">Skin</label>
            <select
              value={this.state.selectedSkin}
              onChange={this.onSkinSelect}>
              {Object.keys(
                this.state.selectorOptions[this.state.selectedModel].skins
              ).map((function(skin) {
                return (
                  <option key={skin} value={skin}>
                    {skin}
                  </option>
                );
              }).bind(this))}
            </select>
          </div>
        </SketchbookMenu>
        <PixelCanvas 
          pixels={
            this.state.selectorOptions[this.state.selectedModel].pixels
          }
          skin={
            this.state.selectorOptions[this.state.selectedModel]
              .skins[this.state.selectedSkin]
          }
        />
      </SketchbookApp>
    );
  }
});

module.exports = Pixel;
