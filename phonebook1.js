var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
};

var name = phonebookDict['Elizabeth'];
console.log(name);

phonebookDict['Kareem'] = '938-489-1234'

delete phonebookDict['Alice']

var personName = phonebookDict['3'];

console.log(personName);

for (var word in phonebookDict) {
    var definition = phonebookDict[word];
    console.log(word + ':' + definition);
}
