'use strict';

const React = require('react');

const PixelCanvas = React.createClass({
  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);

    // Drawing from the get-go
    this.forceUpdate();
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);                      
  },

  draw: function () {
    var canvas = this.refs.canvas || null;
    if (canvas == null) {
      return;
    }
    /*
     * Canvas always has a default size of 300 x 150. Overriding.
     * http://www.w3.org/TR/2012/WD-html5-author-20120329/the-canvas-element.html#the-canvas-element
     */
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var pixels = this.props.pixels;
    var skin = this.props.skin;
    // Calculating pixel size to keep aspect ratio of drawing
    var size = Math.floor(Math.min(
      canvas.width / pixels[0].length, 
      canvas.height / pixels.length
    ));
    var offsetX = (canvas.width - (size * pixels[0].length)) / 2;
    var offsetY = (canvas.height - (size * pixels.length)) / 2;
    for (var y = 0; y < pixels.length; y++) {
      for (var x = 0; x < pixels[y].length; x++) {
        var fillStyle = pixels[y][x];
        if (skin.hasOwnProperty(fillStyle)) {
          fillStyle = skin[fillStyle]; 
        }
        if (fillStyle == 'skip') {
          continue;
        }
        ctx.fillStyle = fillStyle;
        ctx.fillRect(
          Math.floor(offsetX + (x * size)), 
          Math.floor(offsetY + ( y * size)), 
          size, 
          size
        );
      }
    }
  },

  handleResize: function(e) {
    this.draw();
  },

  render: function() {
    this.draw();

    return (
      <div className="demo">
        <div className="center">
          <canvas ref="canvas" className="pixelCanvas">
          </canvas>
        </div>
      </div>
    );  
  }
});

module.exports = PixelCanvas;
