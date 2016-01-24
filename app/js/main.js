var Pixel = React.createClass({
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
      <div className="app">
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
              {Object.keys(this.state.selectorOptions[this.state.selectedModel].skins)
                .map((function(skin) {
                  return (
                    <option key={skin} value={skin}>
                      {skin}
                    </option>
                  );
                }).bind(this))}
            </select>
          </div>
        </SketchbookMenu>
        <div className="demo">
          <div className="center">
            <PixelCanvas 
              pixels={
                this.state.selectorOptions[this.state.selectedModel].pixels
              }
              skin={
                this.state.selectorOptions[this.state.selectedModel]
                  .skins[this.state.selectedSkin]
              }
            />
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
