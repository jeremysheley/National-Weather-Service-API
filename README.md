# National Weather Service API

A Node.js application that retrieves weather forecasts from the National Weather Service (NWS) API, uses city and state input to identify a location, and stores and retrieves weather data using Redis.

## Features

- Search for weather by entering a city and state.
- Convert city and state into geographic coordinates using the Open-Meteo Geocoding API.
- Retrieve forecast information from the National Weather Service API.
- Cache weather data using Redis.
- Retrieve and display weather data stored in Redis.

## Technologies Used

- **Node.js** – JavaScript runtime
- **Axios** – HTTP requests to external APIs
- **National Weather Service API** – Weather forecast data
- **Open-Meteo Geocoding API** – Location lookup
- **Redis** – Weather data caching
- **Docker** – Running Redis locally in a container

## Prerequisites

Before running the application, install the following:

1. [Node.js](https://nodejs.org/) (version 20 or newer recommended)
2. [Docker Desktop](https://www.docker.com/products/docker-desktop/)

You will also need an active internet connection to access the external APIs.

## Installation

### 1. Clone the repository

Open a terminal and run:

```bash
git clone https://github.com/jeremysheley/National-Weather-Service-API.git
```

Navigate into the project directory:

```bash
cd National-Weather-Service-API
```

### 2. Install dependencies

Install the required Node.js packages:

```bash
npm install
```

This installs the dependencies listed in `package.json`.

### 3. Start Redis

Make sure Docker Desktop is installed and running.

Create and start a Redis container:

```bash
docker run --name redis-container -p 6379:6379 -d redis
```

This starts Redis locally on port `6379`, which is the default port used by the application.

If you have already created the Redis container, start it with:

```bash
docker start redis-container
```

### 4. Run the application

Start the application:

```bash
npm start
```

## Usage

After starting the application, enter a city and state when prompted.

Example:

```text
Enter the city: Frederick
Enter the state (e.g. MD): MD
```

The application will:

1. Look up the location's geographic coordinates.
2. Request the latest forecast from the National Weather Service API.
3. Store the retrieved weather data in Redis.
4. Retrieve the stored data from Redis.
5. Display the weather information in the terminal.

Example output:

```text
Getting weather for Frederick, Maryland...

Weather Results:
Location: Frederick, Maryland
Temperature: 58
Humidity: ...
Forecast: Mostly Sunny
Details: ...
```

*Note: Example weather values are illustrative and will vary depending on the location and current forecast.*

## API Information

This project uses two external APIs:

- [National Weather Service API](https://www.weather.gov/documentation/services-web-api) – Provides weather forecast data.
- [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api) – Converts city and state names into geographic coordinates.

The National Weather Service API supports locations within the United States and its territories.

## Troubleshooting

**Redis connection errors**

- Make sure Docker Desktop is running.
- Check that the Redis container is running:

```bash
docker ps
```

- If the container exists but is stopped, run:

```bash
docker start redis-container
```

**Location not found**

- Verify that the city and state are spelled correctly.
- Use a two-letter state abbreviation (e.g. MD, NY, CA).

**Weather API errors**

- Verify that the requested location is supported by the National Weather Service.
- Check your internet connection.
- The NWS API may occasionally return errors or have temporary service interruptions.

## License

This project is licensed under the ISC License.
