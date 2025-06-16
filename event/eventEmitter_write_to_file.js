import { EventEmitter } from "events";
import { writeFile, appendFileSync } from 'fs';

const EVENT_NAME = 'writeFinishEvent';
const FILE_NAME = 'examples/event_emitter_output.txt';
const FIRST_ROW = 'This is the first row of the file.';
const SECOND_ROW = '\nThis is the second row of the file.';

const eventEmitter = new EventEmitter();

const writeFinishListener = data => { 
    appendFileSync(FILE_NAME, data);
};

writeFile(FILE_NAME, FIRST_ROW, 'utf8', () => {
    eventEmitter.emit(EVENT_NAME, SECOND_ROW);
});

eventEmitter.on(EVENT_NAME, writeFinishListener);