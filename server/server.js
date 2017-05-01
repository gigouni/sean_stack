/* global __dirname */

/**
 * server.js.
 * Entry point of the server side application.
 *
 * @author Nicolas GIGOU.
 * @description The server settings.
 */

const _HOST = "127.0.0.1";
const _PORT = 3000;

/*
 * --------------------------------------------
 * Required modules and router modules
 * npm modules
 * --------------------------------------------
 */
// Express framework and other tools/modules
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Custom helper functions
var Helper = require('./Helper');
var h = new Helper();
h.l("---- SERVER.JS: NPM modules ready.");

// Routes
const api_sequelizer = require('./routes/sequelizer');
const api_sample = require('./routes/samples');
h.l("---- SERVER.JS: Routes ready.");

// Application
const app = express();
h.l("---- SERVER.JS: Express framework is running... Please wait...");

/*
 * --------------------------------------------
 * Settings
 * --------------------------------------------
 */
app.use(logger('dev'));
app.use(bodyParser.json());

/*
 * --------------------------------------------
 * Routing
 * --------------------------------------------
 */
app.use('/api/sequelizer', api_sequelizer);
app.use('/api/samples', api_sample);

/*
 * --------------------------------------------
 * Server settings
 * --------------------------------------------
 */
var server = app.listen(_PORT, function() {
    var host = _HOST;
    var port = server.address().port;

    h.l("         _______           ");
    h.l("       _/       \\_        ");
    h.l("      / |       | \\       ");
    h.l("     /  |__   __|  \\      ");
    h.l("    |__/((o| |o))\\__|     ");
    h.l("    |      | |      |      ");
    h.l("    |\\     |_|     /|     ");
    h.l("    | \\           / |     ");
    h.l("     \\| /  ___  \\ |/     ");
    h.l("      \\ | / _ \\ | /      ");
    h.l("       \\_________/        ");
    h.l("        _|_____|_          ");
    h.l("   ____|_________|____     ");
    h.l("  /                   \\   ");

    h.l('The application is waiting you at http://' + host + ':' + port);
});

module.exports = app;