# findgeolocation


Features:

- find user exist in given location under 100 km of range

# Install

```
npm install findgeolocation
```

# Usage

```js
const geo= require('findgeolocation');

// check whether a user is inside a given location
const userData=[
{"latitude": "52.986375", "user_id": 12, "name": "Christina McArdle", "longitude": "-6.043701"},
{"latitude": "51.92893", "user_id": 1, "name": "Alice Cahill", "longitude": "-10.27699"},
{"latitude": "51.8856167", "user_id": 2, "name": "Ian McArdle", "longitude": "-10.4240951"},
{"latitude": "52.3191841", "user_id": 3, "name": "Jack Enright", "longitude": "-8.5072391"},
{"latitude": "53.807778", "user_id": 28, "name": "Charlie Halligan", "longitude": "-7.714444"},
{"latitude": "53.4692815", "user_id": 7, "name": "Frank Kehoe", "longitude": "-9.436036"},
{"latitude": "54.0894797", "user_id": 8, "name": "Eoin Ahearn", "longitude": "-6.18671"},
{"latitude": "53.038056", "user_id": 26, "name": "Stephen McArdle", "longitude": "-7.653889"}]

console.log(geo(userData, 53.339428, -6.257664)) // return array of users in the given range(53.339428, -6.257664) in sorted order of user_id

```


# License

ISC