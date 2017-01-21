'use strict'

const mraa = require("mraa")
const led = new mraa.Gpio(7)

led.dir(mraa.DIR_OUT); 
let ledState = 0;

function blinkLed(){
	++ledState
	led.write(ledState%2);
}

setInterval(blinkLed, 1000);

