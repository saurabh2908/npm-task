const distance= require('./geoFinder-utils/src/distance');

/**
 * @param {array} userData 
 * @param {number} lat 
 * @param {number} lng 
 */

module.exports= function getDistance(userData, lat, lng){

    let arr=[];
    for (var i = 0; i < userData.length; i++) {


        /**
         * User under 100KM range wrt to given latitude and longitude
         */
        if (distance(lat, lng, userData[i].latitude, userData[i].longitude) <= 100) {
            let a={
                name:userData[i].name,
                user_id:userData[i].user_id
            }

            arr.push(a);
        }


    }

    arr.sort((a,b)=>a.user_id-b.user_id);

    return arr;
  }