
// External modules (managed by npm) - nodemon

// -> Where can we find external modules?
// https://www.npmjs.com

// Package - random-fruits-name, nodemon

// -> How to use external modules / packages ?
        // - Make sure your have initialized the npm (npm init or npm init -y)

// step: 01 - NPM init
// step: 02 - npm i random-fruits-name
// Package Link https://www.npmjs.com/package/random-fruits-name

// Package Link https://www.npmjs.com/package/movies-names

const getRandomFruitsName = require('random-fruits-name');
console.log(getRandomFruitsName("en"));


var moviesNames = require('movies-names');
console.log(moviesNames.all)
console.log(moviesNames.random())