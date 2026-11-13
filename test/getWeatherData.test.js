const { expect } = require('chai');
const nock = require('nock');
const getWeatherData = require('../getWeatherData');

describe('getWeatherData', () => {
  it('should fetch weather data for valid coordinates', async () => {
    const lat = '38.8951';
    const lon = '-77.0364';

    // Mock the response from the points endpoint
    nock('https://api.weather.gov')
      .get(`/points/${lat},${lon}`)
      .reply(200, {
        properties: {
          forecast: 'https://api.weather.gov/gridpoints/FOO/45,45/forecast'
        }
      });

    // Mock the response from the forecast endpoint
    nock('https://api.weather.gov')
      .get('/gridpoints/FOO/45,45/forecast')
      .reply(200, {
        properties: {
          periods: [
            {
              temperature: 75,
              relativeHumidity: 65,
              shortForecast: 'Partly Cloudy',
              detailedForecast: 'Partly cloudy with a chance of rain.'
            }
          ]
        }
      });

    const weatherData = await getWeatherData(lat, lon);
    expect(weatherData).to.deep.equal({
      temperature: 75,
      humidity: 65,
      shortForecast: 'Partly Cloudy',
      detailedForecast: 'Partly cloudy with a chance of rain.'
    });
  });

  it('should handle errors from the weather API', async () => {
    const lat = '38.8951';
    const lon = '-77.0364';

    // Mock a 404 error response
    nock('https://api.weather.gov')
      .get(`/points/${lat},${lon}`)
      .reply(404);

    try {
      await getWeatherData(lat, lon);
    } catch (error) {
      expect(error.message).to.include('Request failed with status code 404');
    }
  });
});