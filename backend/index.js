require('dotenv').config();
const express = require('express');
const router = require('./routes/index');
const app = express();
const mongoConfig = require('./config/mongoConfig');

// Class 97 || 00:30:00

// mongodb+srv://merniandb:merniandbpass@cluster0.l4verf8.mongodb.net/mernian?retryWrites=true&w=majority&appName=Cluster0

mongoConfig();

app.use('/', router);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Server port running');
});
