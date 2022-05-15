# Need to install with React Projects 

1. React
2. React-Dom
3. React-Router-Dom
4. Firebase
5. React-Firebase-Hooks
6. React-Bootstrap
7. React-Toastify

# Need to install a Server

1. Open CMD and type: npm init -y
2. After that type: npm i express cors mongodb dotenv
## After That ...
1. const express = require('express');
2. const cors = require('cors')
3. const app = express();
4. require('dotenv').config()
5. const port = process.env.PORT || 5000;

//use middleware
1. app.use(cors());
2. app.use(express.json())

1. app.get('/', (req, res) => {
  res.send('Running my node server');
  });

2. app.listen(port, () => {
  console.log('Listening to port', port);
  });
