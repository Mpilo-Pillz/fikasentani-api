const express = require('express');


const summaryRouter = require('./routes/summaryRoutes')
const learningRouter = require('./routes/learningRoutes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({message:'Mpilz connected'})
});

// app.get('/api/v1/summary', getSummary);
// app.post('/api/v1/learning', createLearning);

app.use('/api/v1/learning', learningRouter);
app.use('/api/v1/summary', summaryRouter);

module.exports = app;