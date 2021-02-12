const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());
const summary = JSON.parse(fs.readFileSync(`${__dirname}/data/personal.json`)); 
const learning = JSON.parse(fs.readFileSync(`${__dirname}/data/learning.json`));

app.get('/', (req, res) => {
    res.status(200).json({message:'Mpilz connected'})
});

const getSummary = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: summary.length,
        data: {
           summary 
        }
    })
}

const createLearning = (req, res) => {
    console.log(req.body);

    const newId = learning[learning.length - 1].id + 1;
    const newLearning = Object.assign({id: newId}, req.body);
    learning.push(newLearning);
    fs.writeFile(`${__dirname}/data/learning.json`, JSON.stringify(learning), err => {
        res.status(201).json({
            status: 'success',
            data: {
                learning: newLearning
            }
        })
    })
}

// app.get('/api/v1/summary', getSummary);
// app.post('/api/v1/learning', createLearning);

app.route('/api/v1/summary').get(getSummary);
app.route('/api/v1/learning').post(createLearning);

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});