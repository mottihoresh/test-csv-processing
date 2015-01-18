var csv = require('ya-csv');

console.log("starting");

// Load CSV file
var loadScv = function () {
    console.log(new Date());
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

    reader.addListener('end', function(data) {
      //this gets called when it's finished loading the entire file     return allEntries;
      //
        console.log(new Date());
    });
};

loadScv();