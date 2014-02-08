var Yadda = require('yadda'),
    FeatureParser = Yadda.parsers.FeatureParser;

Yadda.plugins.mocha();

var library = require('./features/step_definitions/bottles-library');

var spec = "Feature: Mocha Asynchronous Example \n"
    + "Scenario: A bottle falls from the wall \n\n"
    + "Given 100 green bottles are standing on the wall \n"
    + "when 1 green bottle accidentally falls \n"
    + "then there are 99 green bottles standing on the wall \n";

var feature = new FeatureParser().parse(spec);

var yadda = new Yadda.Yadda(library);
//
scenarios(feature.scenarios, function (scenario, done) {
    yadda.yadda(scenario.steps, done);
});