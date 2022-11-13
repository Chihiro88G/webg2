let mongoose = require('mongoose');

// create a model class
let incidentModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
    {
        collection: "incidents"
    });

module.exports = mongoose.model('Incident', incidentModel);