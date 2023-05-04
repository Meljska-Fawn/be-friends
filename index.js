const express = require('express');
const routes = require('./routes');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/snetwork', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Running on localhost:${PORT}!`);
  });
});