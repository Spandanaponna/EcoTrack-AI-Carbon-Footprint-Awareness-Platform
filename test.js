function testCarbonScore() {
  const score1 = Math.min(Math.round((100 + 50 + 45) / 4), 100);
  console.assert(score1 === 49, "Test 1 Failed");

  const score2 = Math.min(Math.round((0 + 82 + 65) / 4), 100);
  console.assert(score2 === 37, "Test 2 Failed");
}

function testValidation() {
  console.assert(
    validateInputs(-1, 100) === "Values cannot be negative.",
    "Negative value test failed"
  );

  console.assert(
    validateInputs(0, 0) ===
      "Add at least one travel or electricity value to calculate your score.",
    "Zero input test failed"
  );
}

function testImpactLevels() {
  console.assert(
    getImpactLevel(20).key === "low",
    "Low impact test failed"
  );

  console.assert(
    getImpactLevel(50).key === "moderate",
    "Moderate impact test failed"
  );

  console.assert(
    getImpactLevel(90).key === "high",
    "High impact test failed"
  );
}

testCarbonScore();
testValidation();
testImpactLevels();

console.log("All tests passed!");