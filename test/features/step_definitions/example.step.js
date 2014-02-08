module.exports = (function () {
    'use strict';
    var English = require('yadda').localisation.English;
    var Dictionary = require('yadda').Dictionary;

    var dictionary = new Dictionary()
        .define('title', /([^"]*)/)
        .define('body', /([^"]*)/)
        .define('number', /(\d+)/);

    return English.library(dictionary)

        .given("An authenticated user", function (next) {
            next();
        })

        .when('A thought is created with title "$title" with a body of "$body"', function (title, body, next) {
            expect(title).to.equal('some title');
            expect(body).to.equal('some body');
            next();
        })

        .then("An http status code of 201 should be received", function (next) {
            expect(true).to.be.true;
            next();
        })

        .then('The total number of thoughts should increase by $number', function (number, next) {
            expect(number).to.equal('1');
            next();
        });
}());
