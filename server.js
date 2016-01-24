const bodyParser = require('body-parser');
const express = require('express');
const nodeJsx = require('node-jsx');
const path = require('path');

const app = express();
nodeJsx.install();

app.set('port', process.env.PORT || 4142);
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

// Setting up routes
require('./app/routes/core-routes.js')(app);

app.get('*', function(req, res) {
  res.json({
    'route': 'Page Not Found'
  });
});

app.listen(app.get('port'), function() {
  console.log('Sketchbook started: http://localhost:' + app.get('port') + '/');
});
