var fs = require('fs');

// Sync command only when reading a config in the beginning of the app, for example. Otherwise, use without Sync

var files = fs.readdir('./lib', function(err, files) {
    if (err) throw err;
    console.log(files);
});

console.log("Reading Files...");
