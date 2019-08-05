const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/104e207a924c336cabc9693296572a39/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'
    request({ url, json: true}, (err, { body }) => {
        if (err) {
            callback('Unable to connect to weather service, check your internet connection', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                summary: body.daily.data[0].summary,
                temperature: body.currently.temperature,
                precipitations: body.currently.precipProbability
            })   
        }
    })
}

module.exports = forecast