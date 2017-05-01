/**
 * Helper Class.
 *
 * @since 0.0.1.
 * @author Nicolas GIGOU.
 * @description A custom NodeJS module to optimize the development process by providing helper functions.
 */
var method = Helper.prototype;

/**
 * @constructor
 * @description Constructs a new Helper instance.
 * @returns {Helper} A small module to avoid long typings. Some kind of lazyness in action.
 * @since 0.0.1.
 * @author Nicolas GIGOU.
 */
function Helper() {
    // console.log("Instantiation of a new Helper object.");
}

/**
 * @description Logs a message.
 * @param {string} message The message to log.
 * @since 0.0.1.
 * @author Nicolas GIGOU.
 */
method.l = function(message) {
    console.log(message);
};

/**
 * @description Stringifies an object.
 * @param {Object} obj The Object to stringify.
 * @returns {string} The stringified version of the Object.
 * @since 0.0.1.
 * @author Nicolas GIGOU.
 */
method.js = function(obj) {
    return JSON.stringify(obj);
};

/**
 * @description Logs a stringify object.
 * @param {Object} obj The Object to stringify.
 * @since 0.0.1.
 * @author Nicolas GIGOU.
 */
method.ljs = function(obj) {
    return console.log(JSON.stringify(obj));
};

/**
 * @description Logs a pretty stringify object.
 * @param {Object} obj The Object to stringify.
 * @since 0.0.1.
 * @author Nicolas GIGOU.
 */
method.ljsp = function(obj) {
    return console.log(JSON.stringify(obj, null, 3));
};

/**
 * @description Logs a stringify object with a specific message.
 * @param {string} msg The message to add to the log.
 * @param {Object} obj The Object to stringify.
 * @since 0.0.1.
 * @author Nicolas GIGOU.
 */
method.ljson = function(msg, obj) {
    return console.log(msg + " : " + JSON.stringify(obj));
};

/**
 * @description Checks if an object exists using pure Javascript function.
 * @param {Object} obj The Object to check.
 * @returns {boolean} True if the object exists. False else.
 * @since 0.0.1.
 * @author Nicolas GIGOU.
 */
method.checkIfObjectExist = function(obj) {
    return (Object.keys(obj).length > 0);
};

/**
 * @description Compares two strings.
 * @param {string} str1 The first string which will be compared.
 * @param {string} str2 The second string which will be compared.
 * @returns {boolean} True if both strings are equals. False else.
 * @since 0.0.1.
 * @author Nicolas GIGOU.
 */
method.sc = function(str1, str2) {
    return str1 === str2;
};

/**
 * @description Counts the number of properties in the first level of the object.! NO RECURSIVITY !
 * @param {Object} obj The Object to check.
 * @returns {number} The number of properties of the object.
 * @since 0.0.1.
 * @author Nicolas GIGOU.
 */
method.countProperties = function(obj) {
    return Object.keys(obj).length;
};

/**
 * @description Handle the errors when requesting the API.
 * @param {string} context The function or the file calling the error to help to debug.
 * @param {Object} err The error Object.
 * @since 0.0.1.
 * @author Nicolas GIGOU.
 */
method.handleAPIErrors = function(context, err) {
    context = (typeof context === 'undefined') ? 'something' : context;
    console.log("\n--------------- !ERROR! ---------------\nError caught by " + context + ": " + JSON.stringify(err));

    var more_infos = "The table is created but there is a caught error";
    if (this.countProperties(err) > 0) {
        if (this.sc(err.parent.code, "ER_NO_SUCH_TABLE")) {
            more_infos = "--------------- The table doesn't exist! ---------------\n";
        }

        console.log("\n--------------- !ERROR! ---------------\n" + more_infos + "Complete error caught by " + context +
            ": " + JSON.stringify(err));
    }
    return {};
};

module.exports = Helper;