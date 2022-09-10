const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const docs = require("./src/routes/docs");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(docs);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.listen(PORT, () => {
  console.log(`Server is listeing on PORT ${PORT}`);
});
