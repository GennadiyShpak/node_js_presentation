import fs from 'fs';

const FILE_PATH = './examples/writeFile_callback.txt';

fs.unlink(FILE_PATH, (err) => { 
  if (err) {
    console.error('Error deleting file:', err);
  }

  console.log('File deleted successfully');
});