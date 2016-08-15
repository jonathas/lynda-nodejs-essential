var fs = require('fs');

// If I don't want my code to throw an error when calling a Sync request, I need a try catch block

try {
    fs.unlinkSync('./lib/config.json');
} catch (err) {
    console.log(err);
}

fs.unlink('notes.md',function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("Notes.md removed");
    }
});
