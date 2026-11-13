const axios = require('axios');

async function getWeatherData(lat, lon){
    const url = `https://api.weather.gov/points/${lat},${lon}`;

    try{
        const response = await axios.get(url);
        const forecastUrl = response.data.properties.forecast;
        const forecastResponse = await axios.get(forecastUrl);
        const data = forecastResponse.data.properties.periods[0]; //Adjust as necessary

        const weatherData = {
            temperature: data.temperature, //Adjust based on actual API response
            humidity: data.relativeHumidity,
            shortForecast: data.shortForecast,
            detailedForecast: data.detailedForecast,

        };
        return weatherData;
    } catch (error) {
        console.error('Error getting weather data:', error)
        throw error
    }
}

module.exports = getWeatherData;