const fs = require("fs");

const summary = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/personal.json`)
);
const yearNotTesting = ["2020"];
const thisYear = new Date().getFullYear();
const totalYesrsOfExperience = thisYear - 2013;
const yearsAsADeveloper = thisYear - 2018;
const yearsAsATestEngineer = totalYesrsOfExperience - yearNotTesting.length;

exports.getSummary = (req, res) => {
  res.status(200).json({
    status: "success",
    results: summary.length,
    data: {
      summary,
    },
  });
};

exports.getTotalYearsOfExperience = (req, res) => {
  const yearsOfExperience = {
    totalEngineering: totalYesrsOfExperience,
    developer: yearsAsADeveloper,
    testEngineering: yearsAsATestEngineer,
  };

  res.status(200).json({
    status: "success",
    yearsOfExperience: yearsOfExperience,
  });
};
