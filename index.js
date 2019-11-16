// node modules (depedencies) that will be requried, should be installed....
//
const axios = require("axios");
const inquirer = require("inquirer");
const pdf = require("html-pdf");
// import modules
const generateHTML = require("./generateHTML");

inquirer
  .prompt([
    // fist question in terminal from object
    {
      type: "input",
      name: "username",
      message: "What is you Github username?"
    },
    // second question in terminal
    {
      type: "list",
      name: "color",
      message: "What is your favorite color?",
      choices: ["red", "blue", "pink", "green", "purple", "yellow"]
    }
  ])
  // Function to gather data
  .then(data => {
    const queryUrl = `https://api.github.com/users/${data.username}`;
    axios.get(queryUrl).then(response => {
      console.log(response);
      const html = generateHTML(data.color, response);
      console.log(html);
    });
  });
