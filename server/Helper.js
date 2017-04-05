/**
 * Helper Class
 *
 * @author Nicolas GIGOU
 * @date 05/04/2017
 * @description A custom NodeJS module to help during the development process by providing helper functions
 */

function Helper() {

    // Constructor of the class
    this.constructor = function() {
        console.log("Instantiation of a new Helper object.");
    };

    // Log a message
    this.l = function(message) {
        return console.log(message);
    };

    // Stringify an object
    this.js = function (obj) {
        return JSON.stringify(obj);
    };

    // Log a stringify object
    this.ljs = function (obj) {
        return console.log(JSON.stringify(obj));
    };

    // Log a stringify object with a specific message
    this.ljson = function (msg, obj) {
        return console.log(msg + " : " + JSON.stringify(obj));
    };

    // Check if an object exists using pure Javascript function
    this.checkIfObjectExist = function (obj) {
        return ( Object.keys(obj).length > 0 );
    };

    // Compare two strings
    this.sc = function ( str1, str2 ) {
        return str1 == str2;
    };
}

module.exports = Helper;