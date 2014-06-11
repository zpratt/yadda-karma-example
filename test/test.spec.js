module.export = (function () {
    'use strict';
    var $ = require('jquery');

    $.ajaxSetup({async: false});

    var Yadda = require('yadda'),
        English = Yadda.localisation.English,
        FeatureParser = Yadda.parsers.FeatureParser,
        parser = new FeatureParser(English),
        steps = require('./features/step_definitions/example.step'),
        yadda = new Yadda.Yadda(steps),
        loaderFeature = $.get('base/test/features/example.feature').responseText,
        feature = parser.parse(loaderFeature);

    Yadda.plugins.mocha.AsyncScenarioLevelPlugin.init();

    scenarios(feature.scenarios, function (scenario, done) {
        yadda.yadda(scenario.steps, done);
    });
    $.ajaxSetup({async: true});
}());
