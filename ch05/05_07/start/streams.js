/* jshint esversion: 6 */
var fs = require('fs');

// fs.readFile('./chat.log', 'UTF-8', function(err, chatlog) {
//     console.log(`File Read ${chatlog.length}`);
// });

// This way it's not loaded all at once, but in chunks ;)
var stream = fs.createReadStream('./chat.log', 'UTF-8');

var data = "";

stream.once("data", function() {
    console.log("\n\n\n");
    console.log("Started Reading File");
    console.log("\n\n\n");
});

stream.on('data', function(chunk) {
    process.stdout.write(` chunk: ${chunk.length} |`);
    data += chunk;
});

stream.on("end", function() {
    console.log("\n\n\n");
    console.log(`Finished Reading File ${data.length}`);
    console.log("\n\n\n");
});
