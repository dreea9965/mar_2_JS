
var fun = function call3Times(fun) {
  fun();
  fun();
  fun();
};



var good = call3Times.forEach(function fun(hello) {
  return fun();
});

call3Times('fun');
