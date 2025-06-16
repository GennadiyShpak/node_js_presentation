import { EventEmitter } from "events";

const EVENT_NAME = 'customEvent';

const eventEmitter = new EventEmitter();

const listener = (data) => { 
  console.log(`Event received with data from listener1: ${data}`);
};

const listener2 = (data) => { 
  console.log(`Event received with data from listener2: ${data}`);
};

// Using addListener the same way as on
eventEmitter.addListener(EVENT_NAME, listener);
eventEmitter.on(EVENT_NAME, listener2);

eventEmitter.emit(EVENT_NAME, 'This is a first custom event call!');
eventEmitter.emit(EVENT_NAME, 'This is a second custom event call!');

// Using off the same way as removeListener
eventEmitter.off(EVENT_NAME, listener);

eventEmitter.emit(EVENT_NAME, 'This is a third custom event call!');
