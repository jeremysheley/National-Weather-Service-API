const { expect } = require('chai');
const sinon = require('sinon');
const client = require('../redisClient');
const storeData = require('../storeData');

describe('storeData', () => {
  it('should store data in Redis', async () => {
    const setStub = sinon.stub(client, 'set').resolves('OK');
    const key = 'weatherData';
    const value = { temperature: 75 };

    await storeData(key, value);
    expect(setStub.calledOnce).to.be.true;
    expect(setStub.calledWith(key, JSON.stringify(value))).to.be.true;

    setStub.restore();
  });

  it('should handle errors when storing data in Redis', async () => {
    const setStub = sinon.stub(client, 'set').rejects(new Error('Redis error'));
    const key = 'weatherData';
    const value = { temperature: 75 };

    try {
      await storeData(key, value);
    } catch (error) {
      expect(error.message).to.equal('Redis error');
    }

    setStub.restore();
  });
});