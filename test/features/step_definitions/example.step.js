/* jshint -W030 */

module.exports = (function () {
    'use strict';
    var $ = require('jquery'),
        English = require('yadda').localisation.English,
        Dictionary = require('yadda').Dictionary,
        dictionary = new Dictionary()
            .define('title', /([^"]*)/)
            .define('body', /([^"]*)/)
            .define('number', /(\d+)/),

        expect = require('chai').expect,

        response,
        server;

    beforeEach(function () {
    });

    beforeEach(function () {
        server = sinon.fakeServer.create();
        server.respondWith('GET', '/thought',
            [200, { 'Content-Type': 'application/json' },
                '[{ "_id": 1, "title": "This Is A Title", "body": "This is the body!" }]']);

    });
    afterEach(function () {
        server.restore();
    });

    return English.library(dictionary)

        .given('An authenticated user', function (next) {
            next();
        })
        .when('a GET request on /thought is performed', function (next) {
            var jqXHR = $.getJSON('/thought');
            jqXHR.then(function (res) {
                response = res[0];
                next();
            });

            server.respond();
        })
        .then('a thought is returned', function (next) {
            expect(response.title).to.equal('This Is A Title');
            next();
        });
}());