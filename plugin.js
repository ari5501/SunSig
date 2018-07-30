var SunCalc = require('suncalc');

var times = SunCalc.getTimes(new Date(), 51.5, -0.1);
var sunrisePos = SunCalc.getPosition(times.sunrise, 51.5, -0.1);

console.log(times);
console.log(sunrisePos);
//getCurrentPosition();

//hackity hack hack 2
