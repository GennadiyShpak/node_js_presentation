import fs from 'fs';

const FILE_CONTENT = 'WriteFile using callback example';
const FILE_PATH = './examples/writeFile_callback.txt';

fs.writeFile(FILE_PATH, FILE_CONTENT, 'utf8', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }

  console.log('File written successfully');
});

console.log('This will log before the file is written due to the asynchronous nature of writeFile.');
