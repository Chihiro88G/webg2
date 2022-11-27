let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

// create a reference to the model
let Incident = require('../models/incident');

module.exports.displayIncidentList = (req, res, next) => {
    Incident.find((err, incidentList) => {
        if (err) {
            return console.error(err);
        }
        else {
            // console.log(incidentList);

            // Comment this out when json is needed
            res.render('landingpage',
                {
                    title: 'Incidents',
                    IncidentList: incidentList,
                    displayName: req.user ? req.user.displayName : ''
                });

            // This was uncommented at first
            // res.json(bookList);
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {

    res.render('incidents/add', {title: 'Add Incident', 
    displayName: req.user ? req.user.displayName : ''});


    res.json({ success: true, msg: 'Succesfully Displayed Add Page' });
}

module.exports.processAddPage = (req, res, next) => {
    let newIncident = Incident({
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

    Incident.create(newIncident, (err, Incident) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {

            res.redirect('/incidents');

            // res.json({ success: true, msg: 'Successfully Added New Incident' });
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Incident.findById(id, (err, IncidentToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //show the edit view
            res.render('incidents/edit', {title: 'Edit Incident', Incident : IncidentToEdit, 
            displayName: req.user ? req.user.displayName : ''});

            // res.json({ success: true, msg: 'Successfully Displayed Book to Edit', book: bookToEdit });
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedIncident = Incident({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

    Incident.updateOne({ _id: id }, updatedIncident, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the book list
            res.redirect('/incidents');

            // res.json({ success: true, msg: 'Successfully Edited Book', book: updatedBook });
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Incident.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the book list
            res.redirect('/incidents');

            // res.json({ success: true, msg: 'Successfully Deleted Book' });
        }
    });
}

