const fs = require('fs');

const summary = JSON.parse(fs.readFileSync(`${__dirname}/../data/personal.json`)); 

exports.getSummary = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: summary.length,
        data: {
           summary 
        }
    })
}