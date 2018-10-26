const makeConstant = function(value){
  return function(){
    return value;
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
  let tracker = {old : initialValue, new : initialValue};  
  return function(deltaValue = 0){
    tracker.old = tracker.new;
    tracker.delta = deltaValue;
    tracker.new = tracker.delta + tracker.old;
    let result = Object.assign({}, tracker);
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
    let sizeOfCollection = copyOfCollection.length;
    let indexToReturnValueOf = currentIndex % sizeOfCollection;
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
