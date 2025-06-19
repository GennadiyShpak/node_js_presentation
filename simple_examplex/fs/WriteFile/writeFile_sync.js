import fs from 'fs';

const FILE_CONTENT = 'WriteFile using sync example';
const FILE_PATH = './examples/writeFile_sync.txt';

try {
  fs.writeFileSync(FILE_PATH, FILE_CONTENT, 'utf8');
  console.log('File written successfully');
}
catch (err) {
  console.error('Error writing file:', err);
}