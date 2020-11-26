import { createServer } from 'http';
import app from './app';
require('babel-register');

const PORT = 9000;

createServer(app).listen(PORT, () => {
  console.log(`🚀  listening on port: ${PORT} 🚀`);
});
