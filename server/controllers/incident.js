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