const express = require("express");

const mongoose = require("mongoose");

const summaryRouter = require("./routes/summaryRoutes");
const learningRouter = require("./routes/learningRoutes");
const trainingRouter = require("./routes/trainingRoutes");
const toolsRouter = require("./routes/toolsRoutes");

mongoose.connect(process.env.DB_URL)
.then(() => console.log("Connection to Mongo successful"))
.catch(() => console.log("Connection to Mongo failed"));

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Mpilz connected" });
});

app.use("/api/v1/learning", learningRouter);
app.use("/api/v1/summary", summaryRouter);
app.use("/api/v1/tool", toolsRouter);
app.use("/api/v1/training", trainingRouter);

module.exports = app;
