const express = require("express");
const mongoose = require("mongoose");
const resturantRouter = require("./routes/restaurantRoutes");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://minhduc:1232001@cluster0.5097h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(resturantRouter);
app.listen(8001, () => {
  console.log(`Port listening at http://localhost:8001/`);
});
