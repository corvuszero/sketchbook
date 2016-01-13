var Pixel = React.createClass({
  getInitialState: function() {
    return {
      selectorOptions : {
        'Mario': {
          key : 0,
          pixels : [
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
        },
        'Megaman': {
          key : 1,
          pixels : [
            ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#000000', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#000000', '#000000', '#00faff', '#00faff', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#007fff', '#007fff', '#007fff', '#000000', '#00faff', '#00faff', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#007fff', '#007fff', '#007fff', '#007fff', '#007fff', '#000000', '#000000', '#000000', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#007fff', '#007fff', '#007fff', '#007fff', '#007fff', '#000000', '#00faff', '#00faff', '#007fff', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#00faff', '#007fff', '#007fff', '#007fff', '#007fff', '#007fff', '#007fff', '#000000', '#000000', '#007fff', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#00faff', '#007fff', '#007fff', '#ffd9cc', '#ffffff', '#ffffff', '#ffffff', '#007fff', '#007fff', '#ffffff', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#00faff', '#007fff', '#ffd9cc', '#ffffff', '#ffffff', '#000000', '#000000', '#ffd9cc', '#000000', '#ffffff', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#007fff', '#ffd9cc', '#ffffff', '#ffffff', '#000000', '#000000', '#ffd9cc', '#000000', '#ffffff', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#000000', '#007fff', '#ffd9cc', '#ffd9cc', '#ffffff', '#ffffff', '#ffffff', '#ffd9cc', '#ffffff', '#ffffff', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#000000', '#00faff', '#00faff', '#000000', '#007fff', '#ffd9cc', '#000000', '#000000', '#000000', '#000000', '#ffd9cc', '#000000', '#000000', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#007fff', '#00faff', '#00faff', '#00faff', '#00faff', '#000000', '#ffd9cc', '#ffd9cc', '#ffd9cc', '#ffd9cc', '#ffd9cc', '#000000', '#00faff', '#00faff', '#007fff', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#007fff', '#007fff', '#00faff', '#00faff', '#00faff', '#00faff', '#000000', '#000000', '#000000', '#000000', '#000000', '#00faff', '#00faff', '#007fff', '#007fff', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#FFFFFF', '#000000', '#007fff', '#007fff', '#007fff', '#00faff', '#000000', '#00faff', '#00faff', '#00faff', '#00faff', '#00faff', '#00faff', '#00faff', '#000000', '#00faff', '#007fff', '#007fff', '#007fff', '#000000', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#FFFFFF', '#000000', '#007fff', '#007fff', '#000000', '#000000', '#000000', '#00faff', '#00faff', '#00faff', '#00faff', '#00faff', '#00faff', '#00faff', '#000000', '#000000', '#000000', '#007fff', '#007fff', '#000000', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#FFFFFF', '#000000', '#007fff', '#007fff', '#007fff', '#000000', '#000000', '#00faff', '#00faff', '#00faff', '#00faff', '#00faff', '#00faff', '#00faff', '#000000', '#000000', '#007fff', '#007fff', '#007fff', '#000000', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#FFFFFF', '#000000', '#007fff', '#007fff', '#007fff', '#000000', '#000000', '#007fff', '#007fff', '#007fff', '#007fff', '#007fff', '#007fff', '#007fff', '#000000', '#000000', '#007fff', '#007fff', '#007fff', '#000000', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#000000', '#000000', '#FFFFFF', '#000000', '#007fff', '#007fff', '#007fff', '#007fff', '#007fff', '#007fff', '#007fff', '#000000', '#FFFFFF', '#000000', '#000000', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#00faff', '#00faff', '#007fff', '#007fff', '#007fff', '#007fff', '#00faff', '#00faff', '#00faff', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#007fff', '#007fff', '#00faff', '#00faff', '#00faff', '#000000', '#00faff', '#00faff', '#00faff', '#00faff', '#007fff', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#000000', '#007fff', '#007fff', '#007fff', '#00faff', '#000000', '#FFFFFF', '#000000', '#00faff', '#007fff', '#007fff', '#007fff', '#000000', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#FFFFFF', '#000000', '#000000', '#007fff', '#007fff', '#007fff', '#007fff', '#007fff', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#007fff', '#007fff', '#007fff', '#007fff', '#007fff', '#000000', '#000000', '#FFFFFF', '#FFFFFF'],
            ['#FFFFFF', '#000000', '#007fff', '#007fff', '#007fff', '#007fff', '#007fff', '#007fff', '#007fff', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#007fff', '#007fff', '#007fff', '#007fff', '#007fff', '#007fff', '#007fff', '#000000', '#FFFFFF'],
            ['#FFFFFF', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#FFFFFF'],
          ]
        }
      },
      selectedModel : 'Mario',
      title : "Pixel"
    }
  },

  onSelect: function(event) {
    this.setState({
      selectedModel : event.target.value
    });
  },

  render: function() {
    return (
      <div className="app">
        <SketchbookMenu title={this.state.title}>
          <div>
            <label htmlFor="model">Model</label>
            <select value={this.state.selectedModel} onChange={this.onSelect}>
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
        </SketchbookMenu>
        <div className="demo">
          <div className="center">
            <PixelCanvas pixels={
              this.state.selectorOptions[this.state.selectedModel].pixels
            }/>
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

var SketchbookMenu = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <h1 className="title">{this.props.title}</h1>
        {this.props.children}
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
