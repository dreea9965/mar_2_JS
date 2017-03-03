
function word(x) {

var dict = {};

var p = x.split(' ');

console.log(p);

for (var i = 0; i < p.length; i++) {
   if (p[i] in dict) {
     dict[p[i]]++;
   }
   else {
     dict[p[i]] = 1;

   }

}

console.log(dict);

}
  // console.log(dict);
word('bananas are yellow and green and yellow');
