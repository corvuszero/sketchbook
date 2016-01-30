const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Sketchbook = React.createFactory(require('../components/Sketchbook'));

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index.ejs', {
      reactOutput: ReactDOMServer.renderToString(Sketchbook({}))
    })
  });
}