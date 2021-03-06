
const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

//use middleware
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Running my node server');
});

app.listen(port, () => {
  console.log('Listening to port', port);
});
