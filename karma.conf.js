module.exports = function(config) {
    config.set({
        basePath: '',

        // frameworks to use
        frameworks: ['mocha', 'browserify', 'chai'],

        files: [
            'test/*',
            'test/features/step_definitions/*.js',
            'node_modules/yadda/dist/yadda-0.9.8.js',
            'node_modules/jquery/dist/jquery.js',
            {pattern: 'test/features/*.feature', included: false}
        ],
        exclude: [],
        reporters: ['progress'],
        port: 9876,
        runnerPort: 9100,

        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: true,
        browsers: ['Chrome'],
        captureTimeout: 60000,
        singleRun: false,

        // Browserify config
        browserify: {
            watch: true
        },

        // Add browserify to preprocessors
        preprocessors: {
            'test/*': ['browserify'],
            'test/features/step_definitions/*.js': ['browserify']
        }
    });
};