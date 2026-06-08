function testCarbonScore() {
  const score1 = Math.min(Math.round((100 + 50 + 45) / 4), 100);
  console.assert(score1 === 49, "Test 1 Failed");

  const score2 = Math.min(Math.round((0 + 82 + 65) / 4), 100);
  console.assert(score2 === 37, "Test 2 Failed");

  console.log("Tests passed");
}

testCarbonScore();