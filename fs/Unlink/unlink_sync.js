import fs from 'fs';

const FILE_PATH = './examples/writeFile_sync.txt';

try {
    fs.unlinkSync(FILE_PATH);
    console.log('File deleted successfully');
}
catch (err) {
    console.error('Error deleting file:', err);
}
