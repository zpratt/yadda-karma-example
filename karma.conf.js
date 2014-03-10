module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai', 'sinon', 'browserify'],

        files: [
            'node_modules/yadda/dist/yadda-0.9.8.js',
            'node_modules/jquery/dist/jquery.min.js',

            {pattern: 'test/features/*.feature', included: false}
        ],

        exclude: [],

        browserify: {
            debug: true,
            files: [
                'test/test.spec.js',
                'test/features/step_definitions/*.step.js'
            ]
        },

        preprocessors: {
            "/**/*.browserify": "browserify"
        },

        reporters: ['progress'],
        port: 9999,
        colors: true,
        logLevel: config.LOG_INFO,
        singleRun: true,

        plugins: [
            'karma-chai',
            'karma-mocha',
            'karma-phantomjs-launcher',
            'karma-browserifast',
            'karma-sinon'
        ],

        browsers: ['PhantomJS']
    });
};
