'use strict';

const distanceInKmBetweenEarthCoordinates = (req, res) => {
    const body = req.body;
    let lat1 = body.lat1, lat2 = body.lat2, lon1 = body.lon1, lon2 = body.lon2;

    console.log(body);
    const earthRadiusKm = 6368.1;
    const d2r = 0.017453292519943295769236;

    let dLat =(lat2 - lat1) * d2r;
    let dLon = (lon2 - lon1) * d2r;

    let temp_sin = Math.sin(dLat/2.0);
    let temp_cos = Math.cos(lat1 *d2r);
    let temp_sin2 = Math.sin(dLon/2.0);

    let a = (temp_sin * temp_sin) + (temp_cos * temp_cos) * (temp_sin2 * temp_sin2);

    let c = 2.0 * Math.atan2(Math.sqrt(a), Math.sqrt(1.0 - a));
    let distance = earthRadiusKm * c;
    res.send(`the distance between: ${body.lat1}°, ${body.lon1}° and ${body.lat2}°,${body.lon2} is ${distance} kilometers`);
};
//
// function degrees_to_radians(degrees) {
//     const pi = Math.PI;
//     return degrees * (pi * 180);
// }

exports = module.exports = {
    calculate: distanceInKmBetweenEarthCoordinates
};