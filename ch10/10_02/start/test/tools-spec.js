var expect = require('chai').expect;
var tools = require('../lib/tools');

describe("Tools", function() {
    describe("printName()", function() {
        it("should print the last name first", function() {
            var results = tools.printName({
                first: "Jon",
                last: "Ribeiro"
            });

            expect(results).to.equal("Ribeiro, Jon");
        });
    });

    describe("loadWiki()", function() {
        // Just in case our https call takes long
        this.timeout(5000);

        it("Load Abraham Lincoln's wikipedia page", function(done) {
            tools.loadWiki({first: "Abraham", last: "Lincoln"}, function(html) {
                expect(html).to.be.ok;
                done();
            });
        });
    });
});
