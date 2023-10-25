#!/bin/node
const fs = require('fs');
//Obtain the environment string passed to the node script
const environment = process.argv[2];
//read the content of the json file
// const dotEnvFileContent = require(`../envs/${environment}.js`);
//copy the json inside the env.json file
// fs.writeFileSync('.env', dotEnvFileContent.env);
// fs.writeFileSync('config.json', JSON.stringify(dotEnvFileContent.json));
