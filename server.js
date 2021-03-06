const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const config = require("config")

const items = require('./routes/api/items');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');
const PORT = process.env.PORT || 5000; 
const port = PORT;
const app = express();
app.use(bodyParser.json());

const options = {

  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  reconnectTries: 30,
  reconnectInterval: 500, // in ms
}


const db = config.get('mongoURI');

// if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/public'))

  app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
  })
// }

mongoose.connect(db, options)
  .then(() => console.log('CONNECTED'))
  .catch((err) => console.log(err))

app.use('/api/items', items)
app.use('/api/users', users)
app.use('/api/auth', auth)


app.listen(port, () => console.log('Server started on port : ', port))
app.get("/api/customers", (req, res) => {
  const customers = [{
      id: 1,
      firstName: "John",
      lastName: "Doe"
    },
    {
      id: 2,
      firstName: "Brad",
      lastName: "Traversy"
    },
    {
      id: 3,
      firstName: "Mary",
      lastName: "Swanson"
    }
  ];

  res.json(customers);
});
