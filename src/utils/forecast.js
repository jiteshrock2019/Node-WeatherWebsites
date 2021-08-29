const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=4eb5ea4c623593d380fe0465b6db651c&query=${latitude},${longitude}&units=f`
    request({ url, json: true }, (error, { body }) => {
        // console.log("body of forecast ==>", body)
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {currentTemprature : body.current.temperature, weatherDescriptions : body.current.wind_speed})
        }
    })
}

module.exports = forecast