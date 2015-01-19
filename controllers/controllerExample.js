var mongoose = require('mongoose');

Schema = mongoose.Schema;

var exampleSchema = new Schema({
    field1:    { type: String }
});

var exampleModel = mongoose.model('example', exampleSchema);

exports.findAll = function(req, res) {
    exampleModel.find(function(err, examples) {
        if(err) res.send(500, err.message);

        console.log('GET /example')
        res.status(200).jsonp(examples);
    });

};

exports.add = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var exampleToPost = new exampleModel({
        field1: req.body.field1
    });

    exampleToPost.save(function(err, example) {
        if(err) return res.send(500, err.message);
        res.status(201).jsonp(example._id);
    });
};