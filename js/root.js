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
			<div className="pixel">
				<div className="bottomRight">
					<PixelCanvas pixels={this.state.pixels} />
				</div>
			</div>
		);
	}
});

var PixelCanvas = React.createClass({
	componentDidMount: function() {
		// Drawing from the get-go
		this.forceUpdate();
	},

	draw: function () {
		var canvas = this.refs.canvas || null;
		if (canvas == null) {
			return;
		}

		var ctx = canvas.getContext('2d');
		var pixels = this.props.pixels;
		// Calculating pixel size to keep aspect ratio of drawing
		var size = Math.floor(Math.min(
			canvas.width / pixels[0].length, 
			canvas.height / pixels.length
		));
		for (var y = 0; y < pixels.length; y++) {
			for (var x = 0; x < pixels[y].length; x++) {
				ctx.fillStyle = pixels[y][x];
				ctx.fillRect(x * size, y * size, size, size);
			}
		}
	},

	render: function() {
		this.draw();

		return (
			<canvas ref="canvas" className="pixelCanvas">
			</canvas>
		);	
	}
});

var Sketchbook = React.createClass({
	render: function() {
		return (
			<div className="sketchbook">
				<Pixel />
			</div>
		);
	}
});

ReactDOM.render(
	<Sketchbook />,
	document.getElementById('root')
);
