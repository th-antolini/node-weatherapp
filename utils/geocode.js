const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW50b3p6IiwiYSI6ImNqeXB5YzltNjBuZjUzbm1tdzVmbzZhOHoifQ.Mx3Zx3kdRRLfDg5qe1Nekw&limit=1'
    request({ url, json: true}, (err, { body }) => {
        if (err) {
            callback('Unable to connect to location service, check your internet connection', undefined)
        } else if (body.message) {
            callback('Key token invalid', undefined)
        } else if (body.features.length == 0) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode