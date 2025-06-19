import fs from 'fs/promises';

const FILE_PATH = './examples/writeFile_promises.txt';

fs.unlink(FILE_PATH)
  .then(() => {
    console.log('File deleted successfully');
  })
  .catch((err) => {
    console.error('Error deleting file:', err);
  });
  