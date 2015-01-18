var csv = require('ya-csv');

console.log("starting");

// Load CSV file
var loadScv = function () {
    var reader = csv.createCsvFileReader('data/sensor-readings.csv', {
        'seperator': ',',
        'quote': '"',
        'escape': '"',
        'comment': ''
    });

    var allEntries = new Array();

    reader.setColumnNames(['date', 'reading']);

    reader.addListener('data', function(data) {
        console.log(data);
        });

};

loadScv();