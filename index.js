const getWeatherData = require('./getWeatherData');
const storeInRedis =  require('./storeData');
const getFromRedis = require('./getFromRedis');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter the latitude: ', (latitude) => {
    rl.question('Enter the longitude: ', async (longitude) => {
    try{
        const weatherData = await getWeatherData(latitude, longitude);

        await storeInRedis('weatherData', weatherData);

        const retrievedData = await getFromRedis('weatherData');

        console.log('Retrieved Weather Data:', retrievedData);
    } catch (error) {
        console.error('Error:', error)
    } finally {
        rl.close();
    }
    });
});