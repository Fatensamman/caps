'use strict';
'use strict'

const events = require('./events');

let payload;

setTimeout(() => {
  events.on('inTransit', (data) => {
    payload = data;
    console.log(`DRIVER: Picked up the order with this ID: ${data.orderID}`);
    events.emit('In-Transit', data);

    setTimeout(() => {
      console.log('Delivered');
      events.emit('Delivered', payload);
    }, 3000);
  });
}, 1000);
