

function word(chars) {
  var dict = {};

  for (var i = 0; i < chars.length; i++) {

    if (chars[i] in dict) {
        dict[chars.charAt(i)]++;
  }
    else {
      dict[chars[i]] = 1;
    }
}
    console.log(dict);
}

  // console.log(dict);
word('potatoes');
