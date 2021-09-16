

module.exports = {
    reporter: '../../node_modules/mochawesome',
    'reporter-option': [
        'overwrite=true',
        'reportTitle=https://api.github.com/emojis',
        'showPassed=true',
        'reportFilename=html_api_report',
        'reportDir=../test_results',
        'reportPageTitle=API Test Report',
        'charts=true',
        'code=false',
        'overwrite=true',
        'timestamp=true',
        'autoOpen=false'
    ],
    // reporter: '../../node_modules/mocha-junit-reporter',
    // 'reporter-option': [
    //     'mochaFile=../test_results/junit_report.xml'
    // ],
};