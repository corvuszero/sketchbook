const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 4142);
app.use('/', express.static(path.join(__dirname, 'app')));

app.listen(app.get('port'), function() {
  console.log('Sketchbook started: http://localhost:' + app.get('port') + '/');
});