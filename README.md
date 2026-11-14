# National Weather Service API

A Node.js application that retrieves weather forecast information from the National Weather Service (NWS) API using geographic coordinates and stores weather data in Redis.

## Features

- Retrieve weather forecasts using latitude and longitude.
- Connect to the National Weather Service API.
- Store weather data in Redis.
- Retrieve cached weather data from Redis.
- Display weather information in the terminal.

## Technologies Used

- **Node.js** – JavaScript runtime
- **Axios** – HTTP requests to the National Weather Service API
- **National Weather Service API** – Weather forecast data
- **Redis** – Data storage and caching
- **Docker** – Running Redis locally in a container

## Prerequisites

Before running the application, install:

1. [Node.js](https://nodejs.org/) (version 20 or newer recommended)
2. [Docker Desktop](https://www.docker.com/products/docker-desktop/)

An active internet connection is also required to access the National Weather Service API.

## Installation

### 1. Clone the repository

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

### 3. Start Redis

Make sure Docker Desktop is running.

Create and start a Redis container:

```bash
docker run --name redis-container -p 6379:6379 -d redis
```

If you have already created the container, start it with:

```bash
docker start redis-container
```

### 4. Run the application

Start the application:

```bash
npm start
```

## Usage

When the application starts, enter the latitude and longitude of the location you want to retrieve weather information for.

Example:

```text
Enter the latitude: 39.4143
Enter the longitude: -77.4105
```

The application will:

1. Send the coordinates to the National Weather Service API.
2. Retrieve the available weather information.
3. Store the response in Redis.
4. Retrieve the stored data from Redis.
5. Display the weather information in the terminal.

## API Information

This project uses the [National Weather Service API](https://www.weather.gov/documentation/services-web-api) to retrieve forecast information.

The API requires geographic coordinates and supports locations within the United States and its territories.

## Troubleshooting

**Redis connection errors**

- Make sure Docker Desktop is running.
- Verify that the Redis container is running:

```bash
docker ps
```

- If the container exists but is stopped, run:

```bash
docker start redis-container
```

**Weather API errors**

- Verify that the latitude and longitude are valid.
- Make sure the coordinates correspond to a location supported by the National Weather Service.
- Check your internet connection.

## License

This project is licensed under the ISC License.
