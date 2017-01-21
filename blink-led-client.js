'use strict'

const mraa = require("mraa");
const led = new mraa.Gpio(7);

const ID = 1;

const host = '192.168.0.11';
const port = 12345;

const net = require('net');

const sok = new net.Socket();

sok.connect(port, host, () => {
	console.log('connected: ' + ID);
	const payload = {message: 'hello', id: ID}
	sok.write(JSON.stringify(payload));
});


sok.on('data', (data) => {
	console.log('GOT data: blink!');
	blinkLed();
});

sok.on('close', () => {
	console.log('ID: ' + ID + ' closed');
	process.exit(0);
});

led.dir(mraa.DIR_OUT); 

let ledState = 0;

function blinkLed(){
	++ledState;
	led.write(ledState%2);
}

