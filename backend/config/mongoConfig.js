const mongoose = require('mongoose');

let mongoConfig = () => {
  mongoose
    .connect(
      'mongodb+srv://merniandb:merniandbpass@cluster0.l4verf8.mongodb.net/mernian?retryWrites=true&w=majority&appName=Cluster0',
    )
    .then(() => console.log('Database Connected!'));
};

module.exports = mongoConfig;
