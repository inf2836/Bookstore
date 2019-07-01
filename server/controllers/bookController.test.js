const express = require("express");
const moxios = require('moxios');
const request = require('supertest');


const app = express();


const init = (
  mockRedisClient = {
    getAsync: jest.fn(() => Promise.resolve()),
    setAsync: jest.fn(() => Promise.resolve())
  }
) => {
  const app = express();
  app.use(blobStore(mockRedisClient));
  return app;
}
