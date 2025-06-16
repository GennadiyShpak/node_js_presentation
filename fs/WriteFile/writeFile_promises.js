import fs from 'fs/promises';

const FILE_CONTENT = 'WriteFile using promises example';
const FILE_PATH = './examples/writeFile_promises.txt';

fs.writeFile(FILE_PATH, FILE_CONTENT, 'utf8')
  .then(() => {
    console.log('File written successfully');
  })
  .catch((err) => {
    console.error('Error writing file:', err);
  });