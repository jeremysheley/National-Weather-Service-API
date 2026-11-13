**Coding Challenge**

Write software, work with an API, and store it in a data store

**Weather API**

Write software that fetches weather data from the National Weather Service 
[API](https://www.weather.gov/documentation/services-web-API) 
and stores the data in a Redis Cache. After storing the data, get the data from the redis 
cache and display some fields.

You can run [Redis](https://redis.io) locally in a containerized environment. To do so, install and 
run [Docker](https://www.docker.com/products/docker-desktop/#). You may then create a simple Redis based Docker container with the 
command:

docker run --name redis-container -p 6379:6379 -d redis

**References:**
+ [Examples of the National Weather Service API](https://www.weather.gov/documentation/services-web-api)
+ [Link to Download Docker](https://www.docker.com/products/docker-desktop/#)
+ [How to Use Redis in Docker](https://www.docker.com/blog/how-to-use-the-redis-docker-official-image)
+ [Redis Client Libraries](https://redis.io/docs/connect/clients/)
