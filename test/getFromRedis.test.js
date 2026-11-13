const { expect } = require('chai');
const sinon = require('sinon');
const client = require('../redisClient');
const getFromRedis = require('../getFromRedis');

describe('getFromRedis', () => {
  it('should retrieve data from Redis', async () => {
    const getStub = sinon.stub(client, 'get').resolves(JSON.stringify({ temperature: 75 }));
    const key = 'weatherData';

    const data = await getFromRedis(key);
    expect(getStub.calledOnce).to.be.true;
    expect(data).to.deep.equal({ temperature: 75 });

    getStub.restore();
  });

  it('should handle errors when retrieving data from Redis', async () => {
    const getStub = sinon.stub(client, 'get').rejects(new Error('Redis error'));
    const key = 'weatherData';

    try {
      await getFromRedis(key);
    } catch (error) {
      expect(error.message).to.equal('Redis error');
    }

    getStub.restore();
  });
});