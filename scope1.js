// Line 1
var a = 0;
// Line 2  a, f
function f(c) {
  // Line 3 afb
  var b = 1;
  // Line 4
  function g(d) {
    // Line 5 afcbdfg
    var e = 4;
    // Line 6afcbdeg
  }
  // Line 7
  return g;
  // Line 8
}
// Line 9
f(2)(3);
// Line 10
