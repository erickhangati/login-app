const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connect = require('./db/connect.js');
const router = require('./router/routes.js');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

const port = 8080;

app.get('/', (req, res) => {
  res.status(201).json('Home server page');
});

app.use('/api', router);

/** start server only when db connected */
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });
    } catch (error) {
      console.log('Cannot connect to the server');
    }
  })
  .catch((error) => {
    console.log('Invalid database connection');
  });
