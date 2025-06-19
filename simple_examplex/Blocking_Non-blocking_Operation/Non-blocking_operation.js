import fs from 'fs';

console.log('Row 3: Starting to read the file...');

fs.readFile('./examples/example.txt', (err, data) => {
  console.log('Row 6: File content:', data);
});

console.log('Row 9: This will log BEFORE the file is read.');
