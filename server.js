const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require('./routes/api/items')
const PORT = process.env.PORT || 5000; 
const port = PORT;
const app = express();

app.use(bodyParser.json());


const db = require('./config/keys').mongoURI;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('CONNECTED'))
  .catch((err) => console.log(err))

app.use('/api/items', items)



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
