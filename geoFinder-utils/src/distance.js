const converter= require('./convert');


/**
 * calculating distance using user's data latitude and longitude
 * @param {number} lat1 latitude of given area
 * @param {number} lon1 longitude of given area
 * @param {numner} lat2 latitude of given user
 * @param {number} lon2 longitude of given user
 * @return {number} dist
 */
 module.exports= function distance(lat1, lon1, lat2, lon2){

    let dlat, dlon, a, c, dist;
  
    /**
     * Converting data into radian
     */

    dlat = converter.convertToRadian(lat2 - lat1);
    dlon = converter.convertToRadian(lon2 - lon1);
    lat1 = converter.convertToRadian(lat1);
    lat2 = converter.convertToRadian(lat2);

    a = Math.sin(dlat / 2) * Math.sin(dlat / 2) + Math.sin(dlon / 2) * Math.sin(dlon / 2) * Math.cos(lat1) * Math.cos(lat2)
    c = 2 * Math.asin(Math.sqrt(a));
    
    /**
     * In kilometers
     */

    dist=converter.convertToKiloMeter(c);

    return dist;

  }