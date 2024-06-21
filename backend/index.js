require('dotenv').config();
const cors = require('cors');
const express = require('express');
const router = require('./routes/index');
const app = express();
const mongoConfig = require('./config/mongoConfig');

// Class 100 || Completed

app.use(express.json());

mongoConfig();
app.use(cors());
app.use('/', router);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Server port running');
});
