const express = require("express");
const route = require("./routes/route.js");
const mongoose = require("mongoose");
const multer = require("multer");

const app = express();

// to parse json data from request object
app.use(express.json());
app.use(multer().any());

mongoose.set("strictQuery", false);

// connect to database
mongoose
  .connect(
    "mongodb+srv://project5productsManagementGroup-42:myGnQEOp010y0N42@cluster0.rf4tgvq.mongodb.net/group-42",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.use("/*", function (req, res) {
  res
    .status(400)
    .send({ status: false, message: "The api you request is not available" });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});
