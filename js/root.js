var Pixel = React.createClass({
  getInitialState: function() {
    return {
      pixels: [
        ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#d80000', '#d80000', '#d80000', '#d80000', '#d80000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
        ['#FFFFFF', '#FFFFFF', '#d80000', '#d80000', '#d80000', '#d80000', '#d80000', '#d80000', '#d80000', '#d80000', '#d80000', '#FFFFFF'],
        ['#FFFFFF', '#FFFFFF', '#706800', '#706800', '#706800', '#f8ab00', '#f8ab00', '#706800', '#f8ab00', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
        ['#FFFFFF', '#706800', '#f8ab00', '#706800', '#f8ab00', '#f8ab00', '#f8ab00', '#706800', '#f8ab00', '#f8ab00', '#f8ab00', '#FFFFFF'],
        ['#FFFFFF', '#706800', '#f8ab00', '#706800', '#706800', '#f8ab00', '#f8ab00', '#f8ab00', '#706800', '#f8ab00', '#f8ab00', '#f8ab00'],
        ['#FFFFFF', '#706800', '#706800', '#f8ab00', '#f8ab00', '#f8ab00', '#f8ab00', '#706800', '#706800', '#706800', '#706800', '#FFFFFF'],
        ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#f8ab00', '#f8ab00', '#f8ab00', '#f8ab00', '#f8ab00', '#f8ab00', '#f8ab00', '#FFFFFF', '#FFFFFF'],
        ['#FFFFFF', '#FFFFFF', '#706800', '#706800', '#d80000', '#706800', '#706800', '#706800', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
        ['#FFFFFF', '#706800', '#706800', '#706800', '#d80000', '#706800', '#706800', '#d80000', '#706800', '#706800', '#706800', '#FFFFFF'],
        ['#706800', '#706800', '#706800', '#706800', '#d80000', '#d80000', '#d80000', '#d80000', '#706800', '#706800', '#706800', '#706800'],
        ['#f8ab00', '#f8ab00', '#706800', '#d80000', '#f8ab00', '#d80000', '#d80000', '#f8ab00', '#d80000', '#706800', '#f8ab00', '#f8ab00'],
        ['#f8ab00', '#f8ab00', '#f8ab00', '#d80000', '#d80000', '#d80000', '#d80000', '#d80000', '#d80000', '#f8ab00', '#f8ab00', '#f8ab00'],
        ['#f8ab00', '#f8ab00', '#d80000', '#d80000', '#d80000', '#d80000', '#d80000', '#d80000', '#d80000', '#d80000', '#f8ab00', '#f8ab00'],
        ['#FFFFFF', '#FFFFFF', '#d80000', '#d80000', '#d80000', '#FFFFFF', '#FFFFFF', '#d80000', '#d80000', '#d80000', '#FFFFFF', '#FFFFFF'],
        ['#FFFFFF', '#706800', '#706800', '#706800', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#706800', '#706800', '#706800', '#FFFFFF'],
        ['#706800', '#706800', '#706800', '#706800', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#706800', '#706800', '#706800', '#706800']
      ]
    }
  },

  render: function() {
    return (
      <div className="app">
        <PixelMenu />
        <div className="demo">
          <div className="center">
            <PixelCanvas pixels={this.state.pixels} />
          </div>
        </div>
      </div>
    );
  }
});

var PixelCanvas = React.createClass({
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
    // Calculating pixel size to keep aspect ratio of drawing
    var size = Math.floor(Math.min(
      canvas.width / pixels[0].length, 
      canvas.height / pixels.length
    ));
    var offsetX = (canvas.width - (size * pixels[0].length)) / 2;
    var offsetY = (canvas.height - (size * pixels.length)) / 2;
    for (var y = 0; y < pixels.length; y++) {
      for (var x = 0; x < pixels[y].length; x++) {
        ctx.fillStyle = pixels[y][x];
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
      <canvas ref="canvas" className="pixelCanvas">
      </canvas>
    );  
  }
});

var PixelMenu = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <h1>Pixel</h1>
      </div>
    );
  }
});

var Sketchbook = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Pixel />
      </div>
    );
  }
});

ReactDOM.render(
  <Sketchbook />,
  document.getElementById('root')
);
