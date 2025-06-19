import { Transform } from 'stream';

const transformStream = new Transform({
    transform(chunk, _encoding, callback) {
        const convertedChunk = chunk.toString().toUpperCase();
        callback(null, convertedChunk);
    }
});

process.stdin
    .pipe(transformStream)
    .pipe(process.stdout);
    