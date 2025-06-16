import { EventEmitter } from "events";

const EVENT_NAME = 'customEvent';

const eventEmitter = new EventEmitter();

eventEmitter.once(EVENT_NAME, (data) => { 
  console.log(`Event received with data: ${data}`);
});

eventEmitter.emit(EVENT_NAME, 'This is a first custom event call!');
eventEmitter.emit(EVENT_NAME, 'This is a second custom event call!');
