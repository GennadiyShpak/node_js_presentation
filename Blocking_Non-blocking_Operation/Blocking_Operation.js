import fs from 'fs';

console.log('Row 3: Starting to read the file...');

const data = fs.readFileSync('./examples/example.txt', 'utf8');

console.log('Row 7: File content:', data);

console.log('Row 9: This will log after the file is read.');
