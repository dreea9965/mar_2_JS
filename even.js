
var j = [1, 2, 5, 6, 5, 20, 30];

var items = j.map(function(i) {
  return i % 2 === 0;
});

console.log(items);
