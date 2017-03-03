var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

var cityName = cities.map(function(k) {
    if (k.temperature < 70.0) {
      return k.name;
    }
});

console.log(cityName);
