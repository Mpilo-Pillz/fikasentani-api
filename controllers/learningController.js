const fs = require('fs');

const learning = JSON.parse(fs.readFileSync(`${__dirname}/../data/learning.json`));

exports.createLearning = (req, res) => {
    console.log('refactor-->',req.body);

    const newId = learning[learning.length - 1].id + 1;
    const newLearning = Object.assign({id: newId}, req.body);
    learning.push(newLearning);
    fs.writeFile(`${__dirname}/../data/learning.json`, JSON.stringify(learning), err => {
        res.status(201).json({
            status: 'success',
            data: {
                learning: newLearning
            }
        })
    })
}