import express from 'express';

const app = express();

app.use('/', (req, res) => {
  return res.send('Hello World !!');
});

export default app;
