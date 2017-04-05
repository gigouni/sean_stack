/**
 * test.js
 *
 * @author Nicolas GIGOU
 * @date_created 05/04/2017
 * @description A test routing file
 */

var express = require('express');
var router = express.Router();

/* GET all data about stats */
router.get('/', function (req, res, ignore)
{
    res.json("OK");
});

module.exports = router;