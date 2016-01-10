var Pixel = React.createClass({
	getInitialState: function() {
		return {
			pixels: [['red', 'green'],['blue', 'yellow']],
			pixelSize: 10
		}
	},

	render: function() {
		return (
			<div className="pixel">
				<div className="bottomRight">
					<PixelCanvas 
						pixels={this.state.pixels}
						pixelSize={this.state.pixelSize}
					/>
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
		for (var y = 0; y < pixels.length; y++) {
			for (var x = 0; x < pixels[y].length; x++) {
				ctx.fillStyle = pixels[x][y];
				ctx.fillRect(
					x * this.props.pixelSize, 
					y * this.props.pixelSize, 
					this.props.pixelSize,
					this.props.pixelSize
				);
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
