let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

let incidentController = require('../controllers/incident');

router.get('/', incidentController.displayIncidentList);


module.exports = router;