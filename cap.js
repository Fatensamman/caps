'use strict';

const events = require('./events');
const vendor = require('./vindor');
const driver = require('./driver');

events.on('inTransit', (data)=>{
        console.log('A new order has been placed', data);
});
events.on('delivered', () => {
    console.log('Thank you, :)');
});
