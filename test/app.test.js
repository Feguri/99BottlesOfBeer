const beerProgram2 = require('../src/app').beerProgram2 ;
const expect = require('chai').expect;
// question: can I run the test millions of times to see if it will fail once?

describe('99 Bottles of beer program', function() {

    it('should return a phrase with all plural "bottle" words when it has a number > 2', function(done) {

        // initiates the test
        let testLyric = new beerProgram2();

        // gets a random number that is greater than 2 (test for this can be found on "testForRandNum.js ")
        let randNumGreaterThan2 = Math.round(Math.random() * 99 + 2);
        let sampleLyric = testLyric.makePhrase(randNumGreaterThan2).split('');

        let numOfS = 0;
        for (let char of sampleLyric) {
            if (char === 's'){
                numOfS++;
            }
        }

        // tests the phrase, if it has 5 "s" in it it should pass. otherwise, it will fail, because the number of "s" would be 3
        expect(numOfS).to.equal(5);

        done();
    });

    it('should not have the plural on the third bottle mention if the number of bottles is 2', function(done) {

        // initiates the test
        let testLyric = new beerProgram2();

        // tests makePhrase with a value of True

        let sampleLyric = testLyric.makePhrase(2).split('');

        let numOfS = 0;
        for (let char of sampleLyric) {
            if (char === 's'){
                numOfS++;
            }
        }

        // tests the phrase, if it has 4 "s" in it it should pass. otherwise, it will fail, because the number of "s" would be 3
        expect(numOfS).to.equal(4);

        done();
    });

    it('should not be in plural if the number of bottle reaches 1', function(done) {

        // initiates the test
        let testLyric = new beerProgram2();

        // tests makePhrase with a value of True

        let sampleLyric = testLyric.makePhrase(1).split('');

        let numOfS = 0;
        for (let char of sampleLyric) {
            if (char === 's'){
                numOfS++;
            }
        }

        // tests the phrase, if it has 3 "s" in it it should pass. otherwise, it will fail, because the number of "s" would be 3
        expect(numOfS).to.equal(3);

        done();
    });
});