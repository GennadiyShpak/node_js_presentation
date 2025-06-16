import fs from 'fs/promises';

try {
  const data = await fs.readFile('./examples/example.txt', 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}