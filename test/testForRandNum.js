// test
let numList = [];
for(let i =1000; i>0; i--){
  let randNumGreaterThan2 = Math.round(Math.random() * 100 + 2);
  
  numList.push(randNumGreaterThan2)
}

for(let num of numList){
//   it shouldn't be printing anything
  if(num === 0 || num === 1){
     console.log('found a no-no: ' + num)
    document.getElementById('randomNum').innerHTML += 'found a no-no: ' + num;
     } 
}

// failed test version (saving to compare progress)
it('should return a phrase with all plural "bottle" words when it has a number > 2', function(done) {

  // initiates the test
  let testLyric = new beerProgram2();

  // gets a random number that is greater than 2 (test for this can be found on "testForRandNum.js ")
  let randNumGreaterThan2 = Math.round(Math.random() * 99 + 2);
  let sampleLyric = testLyric.makePhrase(randNumGreaterThan2);

  // Targets the supposed "s" from the plural phrase
  let bottlechar1 = sampleLyric[11];
  let bottlechar2 = sampleLyric[42];
  console.log("printing: ", bottlechar1, bottlechar2, randNumGreaterThan2)

  // tests the phrase
  expect(bottlechar1).to.equal('s');
  expect(bottlechar2).to.equal('s');
  done();
});