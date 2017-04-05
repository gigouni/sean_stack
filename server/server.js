/**
 * server.js
 * Entry point of the server side application
 *
 * @author Nicolas GIGOU
 * @date 05/04/2017
 * @description The server settings
 */

/*
 * --------------------------------------------
 * Required modules and router modules
 * npm modules
 * --------------------------------------------
 */
// Express framework and other tools/modules
const express       = require('express');
const path          = require('path');
const logger        = require('morgan');
const cookieParser  = require('cookie-parser');
const bodyParser    = require('body-parser');

// Routes
const test         = require('./routes/test');

// Application
const app = express();

/*
 * --------------------------------------------
 * View engine setup and static files
 * --------------------------------------------
 */
app.set('views', path.join(__dirname, '../client/src/'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: false
    }
));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/src')));
app.use(express.static(path.join(__dirname, '../client/src/app')));


/*
 * --------------------------------------------
 * Routing
 * --------------------------------------------
 */
app.use('/api/test', test);

/*
 * --------------------------------------------
 * Server settings
 * --------------------------------------------
 */
var server = app.listen(3000, function()
{
    var host = '127.0.0.1';
    var port = server.address().port;

    console.log("         _______           ");
    console.log("       _/       \\_        ");
    console.log("      / |       | \\       ");
    console.log("     /  |__   __|  \\      ");
    console.log("    |__/((o| |o))\\__|     ");
    console.log("    |      | |      |      ");
    console.log("    |\\     |_|     /|     ");
    console.log("    | \\           / |     ");
    console.log("     \\| /  ___  \\ |/     ");
    console.log("      \\ | / _ \\ | /      ");
    console.log("       \\_________/        ");
    console.log("        _|_____|_          ");
    console.log("   ____|_________|____     ");
    console.log("  /                   \\   ");

    console.log('Your project is waiting you at http://%s:%s', host, port);
});

module.exports = app;