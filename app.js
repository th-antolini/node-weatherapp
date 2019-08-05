const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (process.argv[2]) {
    geocode(process.argv[2], (err, { location, latitude, longitude}) => {
        if (err) { return console.log(err) }
        forecast(latitude, longitude, (err, { summary, temperature, precipitations}) => {
            if (err) { return console.log(err) }
    
            console.log("\n" + location);
            console.log(summary);
            console.log('Outdoor temperature is ' + temperature + '°C')
            console.log('There is a ' + precipitations + '% chance to rain.')
        })
    })
} else {
    console.log('You didn\'t put a valid address')
}