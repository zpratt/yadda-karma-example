module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai', 'sinon', 'browserify'],

        files: [
            'node_modules/yadda/dist/yadda-0.9.8.js',
            'node_modules/jquery/dist/jquery.min.js',

            'test/*.spec.js',
            {pattern: 'test/features/*.feature', included: false}
        ],

        exclude: [],

        preprocessors: {
            'test/*.spec.js': 'browserify',
            'test/features/step_definitions/*.step.js': 'browserify'
        },

        browserify: {
            debug: true,
            files: [
                'test/test.spec.js',
                'test/features/step_definitions/*.step.js'
            ]
        },

        reporters: ['progress'],
        port: 9999,
        colors: true,
        logLevel: config.LOG_DEBUG,

        browsers: ['PhantomJS']
    });
};
