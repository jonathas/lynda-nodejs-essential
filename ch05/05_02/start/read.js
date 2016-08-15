var fs = require('fs');
var path = require('path');

// Without the text encoding it will read as binary
// var contents = fs.readFileSync('./lib/sayings.md','UTF-8');

// fs.readFile('./lib/sayings.md', 'UTF-8', function(err, contents) {
//     if (err) console.log(err);
//     console.log(contents);
// });

// Reading all the files in the directory
fs.readdir('./lib', function(err, files) {
    files.forEach(function(fileName) {
        var file = path.join(__dirname,'lib',fileName);
        var stats = fs.statSync(file);
        if(stats.isFile() && fileName !== '.DS_Store') {
            fs.readFile(file, 'UTF-8', function(err, contents) {
                console.log(contents);
            });
        }
    });
});
