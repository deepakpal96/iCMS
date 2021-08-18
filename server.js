const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var routes = require("./routes");
const app = express();
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

let router = express.Router()
routes(router);
app.use("/", router)

mongoose.connect("mongodb://localhost:27017/Users",
  { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('mongodb connected')
});

app.use('/api/user', require('./router/user'))

const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



