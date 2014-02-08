var English = require('yadda').localisation.English;
var Dictionary = require('yadda').Dictionary;

module.exports = (function () {
    var dictionary = new Dictionary()
        .define('NUM', /(\d+)/);

    var library = English.library(dictionary)

        .given("A module to inject", function(next) {
            next();
        })

        .when("A module depends on a module that has not been loaded", function(next) {
            next();
        })

        .then("Load the module asynchronously", function(next) {
            expect(true).to.be.false;
            next();
        });
    return library;
}());
