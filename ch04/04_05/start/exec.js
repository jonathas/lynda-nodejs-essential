var exec = require('child_process').exec;

//exec("google-chrome-stable http://google.com");
exec("ls", function(err, stdout) {
    if(err) throw err;
    console.log("Listing Finished");
    console.log(stdout);
});
exec("git version", function(err, stdout) {
    if(err) throw err;
    console.log("Git Version Executed");
    console.log(stdout);
});
