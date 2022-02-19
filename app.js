const express = require("express");

const summaryRouter = require("./routes/summaryRoutes");
const learningRouter = require("./routes/learningRoutes");
const trainingRouter = require("./routes/trainingRoutes");
const toolsRouter = require("./routes/toolsRoutes");

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
