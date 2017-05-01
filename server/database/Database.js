/* global __dirname */

const fs = require('fs');
const path = require('path');
var Sequelize = require('sequelize');
const Helper = require('../Helper');
var h = new Helper();

/**
 * Database Class.
 * 
 * @description Handles the connection with the database.
 * @since 0.0.1.
 * @author Nicolas GIGOU.
 */
var method = Database.prototype;

/**
 * @constructor
 * @description Constructs a new Database instance.
 * @param {string} location The file or the context of the instantiation.
 * @returns {Database} An instance of a connected Database.
 * @since 0.0.1.
 * @author Nicolas GIGOU.
 */
function Database(location) {
    location = (typeof location === 'undefined') ? 'something' : location;
    h.l("Database object instantiated by " + location + ".");

    this.getCredentials().then(credentials => {
        this._connection = new Sequelize(credentials.database, credentials.user.id, credentials.user.pass, {

            // the sql dialect of the database
            dialect: credentials.dialect,

            // use pooling in order to reduce db connection overload and to increase speed
            pool: { maxConnections: 5, maxIdleTime: 30 },

            // language is used to determine how to translate words into singular or plural form
            language: 'en'
        });
    });
}

/**
 * @private
 * @description Gets the credentials from a JSON file thanks to the fs' npm module.
 * @returns {Object} The credentials.
 * @since 0.0.1.
 * @author Nicolas GIGOU.
 */
method.getCredentials = function() {
    return new Promise(function(resolve, reject) {
        resolve(JSON.parse(fs.readFileSync(path.join(__dirname, '/credentials.json'), 'utf-8')));
    });
};

module.exports = Database;