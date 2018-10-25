const makeConstant = function(valueToMakeConstant){
  return function(){
    return valueToMakeConstant;
  };
};

const makeCounterFromN = function(countInitializer){
  let counter = countInitializer;
  return function(){
    return counter++;
  };
};

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
    let result = Object.assign({}, tracker);
    return result;
  };
};

const makeFiboGenerator = function(firstInitialValue, secondInitialValue){
  let firstTerm = -firstInitialValue;
  let secondTerm = secondInitialValue + firstTerm;
  
  if(!secondInitialValue){
    secondTerm = firstInitialValue;
  }
  if(!firstInitialValue){
    firstTerm = -1;
    secondTerm = 1;
  }
  return function(){
    let result = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = result;
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
