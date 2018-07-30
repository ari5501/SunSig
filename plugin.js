var SunCalc = require('suncalc');
var Maps = require('@google/maps');

var times = SunCalc.getTimes(new Date(), 51.5, -0.1);
var sunrisePos = SunCalc.getPosition(times.sunrise, 51.5, -0.1);

console.log(times);
console.log(sunrisePos);
//console.log(navigator.geolocation);

//hackity hack hack 2
