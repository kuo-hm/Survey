require("dotenv").config("./.env");
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cors = require("cors");

connectDB();

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/survey", require("./routes/survey"));
app.use("/api/private", require("./routes/private"));

//Error Handler (always last piece of middleware)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server running at port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error:${err}`);
  server.close(() => process.exit(1));
});
