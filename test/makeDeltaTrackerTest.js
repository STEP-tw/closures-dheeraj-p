const assert=require("assert");
const makeDeltaTracker = require('../src/lib.js').makeDeltaTracker;

const testTrackerWithDefaultDeltaZero = function() {
  let trackDelta = makeDeltaTracker(2);
  assert.deepEqual({old: 2, delta: 0, new: 2}, trackDelta());
};

const testTrackerWithPositiveDeltaValue = function() {
  let trackDelta = makeDeltaTracker(3);
  assert.deepEqual({old: 3, delta: 1, new: 4}, trackDelta(1));
  assert.deepEqual({old: 4, delta: 3, new: 7}, trackDelta(3));
};

const testTrackerByModifyingTracker = function(){
  let trackDelta = makeDeltaTracker(1);
  let tracker = trackDelta(2);
  tracker.new = 10;
  assert.deepEqual({old:3, delta: 2, new: 5}, trackDelta(2));
}

const testTrackerWithNegativeDeltaValue = function() {
  let trackDelta = makeDeltaTracker(1);
  assert.deepEqual({old: 1, delta: -1, new: 0}, trackDelta(-1));
  assert.deepEqual({old: 0, delta: -2, new: -2}, trackDelta(-2));
};

const runTests = function() {
  if(!makeDeltaTracker) {
    console.log("Function 'makeDeltaTracker' in not implemented yet. Not running tests.");
    return;
  }

  testTrackerWithDefaultDeltaZero();
  console.log("testTrackerWithDefaultDeltaZero passed");

  testTrackerWithPositiveDeltaValue();
  console.log("testTrackerWithPositiveDeltaValue passed");

  testTrackerByModifyingTracker();
  console.log("testTrackerByModifyingTracker passed");

  testTrackerWithNegativeDeltaValue();
  console.log("testTrackerWithNegativeDeltaValue passed");
};

runTests();
