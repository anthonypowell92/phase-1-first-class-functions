function receivesAFunction(callBack){
  callBack();
}

function returnsANamedFunction(){
  return function ANamedFunction(){};
}

function returnsAnAnonymousFunction() {
  return function(){};
}
