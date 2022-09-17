/**
 * convert degree into radian
 * @param {number} deg
 * @return {number} rad
 */

function convertToRadian(deg){
    let rad = deg * Math.PI / 180;
    return rad;
}


/**
 * @param {number} rad
 * @return {number} km
 */

function convertToKiloMeter(rad){
    R = 6372.8; // km
    return R * rad;
}

module.exports={convertToRadian,convertToKiloMeter}
