import { createReadStream, createWriteStream } from 'fs';

const readStream = createReadStream('examples/for_readable_stream.txt');
const writeStream = createWriteStream('examples/for_writable_stream.txt');

readStream.pipe(writeStream);

readStream.on('close', () => {
  console.log('File copy completed successfully.');
});
