import * as chai from "chai";
import {expect} from "chai";
import {stub} from "sinon";
import * as sinonChai from "sinon-chai";

chai.use(sinonChai);

describe("CommandLine", function() {
    before(function() {
	    stub(console, "log");
    });
    it("Ask for help", function(done) {
        console.log("Help!");
        expect(console.log).calledOnce;
        done();
    });
});