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
const makeDeltaTracker = undefined;
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
