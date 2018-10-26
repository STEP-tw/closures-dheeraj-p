const makeConstant = function(constant){
  return function(){
    return constant;
  };
};

const makeCounterFromN = function(countInitializer){
  let counter = countInitializer;
  return function(){
    return counter++;
  };
};

const makeCounterFromZero = function(){
  return makeCounterFromN(0);
};

const makeDeltaTracker = function(initialValue){
  let old = initialValue;
  return function(delta = 0){
    let newValue = old + delta;
    let result = {old, delta, new : newValue};
    old = newValue;
    return result;
  };
};

const makeFiboGenerator = function(firstInitialValue = 1, secondInitialValue = 0){
  let secondTerm = Math.max(firstInitialValue, secondInitialValue);
  let firstTerm = Math.min(secondInitialValue, firstInitialValue);
  return function(){
    let result = firstTerm;
    firstTerm = secondTerm;
    secondTerm = result + firstTerm;
    return result;
  };
};

const makeCycler = function(collection){
  let currentIndex = 0;
  let copyOfCollection = collection.slice();
  return function(){
    let indexToReturnValueOf = currentIndex % copyOfCollection.length;
    currentIndex++;
    return copyOfCollection[indexToReturnValueOf];
  };
};

const curry = function(combiner, initialValue){
  return function(valueToCombine, anotherValueToCombine){
    return combiner(initialValue, valueToCombine, anotherValueToCombine);
  };
};

const compose = function(firstOperation, secondOperation){
  return function(collection, anotherCollection){
    let result = firstOperation(secondOperation(collection, anotherCollection));
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
