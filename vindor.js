'use strict'
const event = require('./events.js');
const faker = require('faker');
require('dotenv').config();

setInterval(() => {
  const store = {
    store: process.env.STORE,
    orderID: faker.datatype.number(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  }

  event.emit('inTransit', store);
}, 5000);