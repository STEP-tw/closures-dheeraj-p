const makeConstant = function(valueToMakeConstant){
  return function(){
    return valueToMakeConstant;
  };
};

const makeCounterFromN = undefined;
const makeCounterFromZero = undefined;
const makeDeltaTracker = undefined;
const makeFiboGenerator = undefined;
const makeCycler = undefined;
const curry = undefined;

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
