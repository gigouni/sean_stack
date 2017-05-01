/**
 * sequelizer.js
 *
 * @author Nicolas GIGOU
 * @description A Router file to handle the basic Sequelize operations
 */

var path = require('path');
var express = require('express');
var router = express.Router();

const Database = require('../database/Database');
const db = new Database("sequelizer.js");

const Sample = require('../models/prefix_sample');

/**
 * @description Adds some sample data to test the API.
 * @returns {Object} The created Sample.
 */
router.get('/add_samples', function(req, res, err) {
    var Sample = db._connection.import(path.join(__dirname, '../models/prefix_sample'));
    Sample.create({ sample_acronym: "T1", sample_name: "Test 1" }).then(
        Sample.create({ sample_acronym: "T2", sample_name: "Test 2" }).then(
            Sample.create({ sample_acronym: "T3", sample_name: "Test 3" }).then(
                result => res.json({ status: "Insertions added successfully!" }), err => res.json(h.handleAPIErrors("sequelizer.js", err)))
        )
    );
});

/**
 * @description Synchronizes the models with the API if it's not already done.
 *              The tables will be created automatically by the ORM.
 *              It will check the existence of the Object table before each POST request.
 * 
 * @returns {Object} The status code of the application.
 */
router.get('/synchro', function(req, res, err) {
    db._connection.sync({ force: true }).then(function() {
        res.json({ status: "Synchronization successfully completed!" });
    });
});

module.exports = router;