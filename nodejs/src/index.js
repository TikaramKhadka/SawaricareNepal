const express = require('express');
const UserRoute = require('./route/user');
const app = express();
const port = 5001;

app.use(express.json()); // To parse incoming JSON data
app.use('/api', UserRoute); // Prefix route with '/api'

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
