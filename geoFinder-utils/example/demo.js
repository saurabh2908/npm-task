const userData= require('./data.json');
const geo= require('../../geoFinder');

let lat=53.339428;
let long=-6.257664;

console.log(geo(userData,lat,long));