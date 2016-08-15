var fs = require('fs');

// Moving a directory
//fs.renameSync('./assets/logs', './logs');

//console.log("Directory moved");

fs.readdirSync('./logs').forEach(function(fileName) {
    fs.unlinkSync('./logs/' + fileName);
});

fs.rmdir('./assets', function(err) {
    if(err) {
        throw err;
    }

    console.log("Assets Directory Removed");
});

// Cannot remove a directory, unless it is empty
fs.rmdir('./logs', function(err) {
    if(err) {
        throw err;
    }

    console.log("Logs directory removed");
});
