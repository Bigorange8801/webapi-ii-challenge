const express = require('express');

const server = express();

const index = require('./index');

server.use(express.json());

server.use('/api/posts', index);
server.use('/', (req, res) => {
  res.status(200).json('Express home route');
});
server.listen(5000, () => console.log('Server is running'));
module.exports = server;