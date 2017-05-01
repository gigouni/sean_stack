/**
 * samples.js
 *
 * @description Samples handler through the API.
 * @since 0.0.1.
 * @author Nicolas GIGOU.
 */

var path = require('path');
var express = require('express');
var router = express.Router();

const Helper = require('../Helper');
const Database = require('../database/Database');
const db = new Database("samples.js");
const h = new Helper();

/**
 * @description Gets all the sample data.
 * @returns {Array} All the sample data.
 * @since 0.0.1.
 * @author Nicolas GIGOU.
 */
router.get('/', function(req, res, err) {
    var SampleModel = db._connection.import(path.join(__dirname, '../models/prefix_sample'));
    SampleModel.findAll().then(samples => res.json(samples), err => res.json(h.handleAPIErrors("samples.js", err)));
});

/**
 * @description Gets one specific sample data using his ID.
 * @returns {Object} The sample data.
 * @since 0.0.1.
 * @author Nicolas GIGOU.
 */
router.get('/:id', function(req, res, err) {
    var SampleModel = db._connection.import(path.join(__dirname, '../models/prefix_sample'));
    SampleModel.findById(req.params.id).then(sample => res.json(sample), err => res.json(h.handleAPIErrors("samples.js", err)));
});

module.exports = router;