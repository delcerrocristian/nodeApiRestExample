var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
    res.send("Hello World!");
});

app.use(router);

app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/example', function(err, res) {
    if(err) throw err;
    console.log('Connected to Database');
});

var exampleController = require('./controllers/controllerExample');

// API routes
var routerExample = express.Router();

routerExample.route('/example')
    .get(exampleController.findAll)
    .post(exampleController.add);

app.use('/api', routerExample);