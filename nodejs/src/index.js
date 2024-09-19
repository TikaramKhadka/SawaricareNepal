const express = require('express');
const UserRoute = require('./route/user');
const CategoryRoute = require('./route/category');
const ProductRoute = require('./route/product');
const app = express();
const port = 4001;
 // To parse incoming JSON data
app.use(express.json());
app.use('/api', UserRoute); 
app.use('/api', CategoryRoute);
app.use('/api', ProductRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
