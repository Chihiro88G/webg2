let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

let incidentController = require('../controllers/incident');

router.get('/', incidentController.displayIncidentList);

/* GET Route for displaying the Add page - CREATE Operation */
// router.get('/add', incidentController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', incidentController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
// router.get('/edit/:id', incidentController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', incidentController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', incidentController.performDelete);

module.exports = router;