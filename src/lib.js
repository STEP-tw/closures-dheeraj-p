const makeConstant = function(valueToMakeConstant){
  return function(){
    return valueToMakeConstant;
  };
};

const makeCounterFromN = undefined;

const makeCounterFromZero = function(){
  let counter = 0;
  return function(){
    return counter++;
  };
};

const makeDeltaTracker = function(initialValue){
  let tracker = {old : initialValue, new : initialValue};  
  return function(deltaValue){
    if(!deltaValue){
      deltaValue = 0;
    }
    tracker.old = tracker.new;
    tracker.delta = deltaValue;
    tracker.new = tracker.delta + tracker.old;
    return tracker;
  };
};

const makeFiboGenerator = undefined;
const makeCycler = undefined;

const curry = function(combiner, initialValue){
  return function(valueToCombine, anotherValueToCombine){
    return combiner(initialValue, valueToCombine, anotherValueToCombine);
  };
};

const compose = function(firstFunc, secondFunc){
  return function(collection, anotherCollection){
    let result = firstFunc(secondFunc(collection, anotherCollection));
    return result;
  };
};

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
