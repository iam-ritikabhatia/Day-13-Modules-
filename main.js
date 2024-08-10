const _ = require('lodash');
const string = "Hello world, this is lodash!";
const camelCasedString = _.camelCase(string);
console.log(`Original string: "${string}"`);
console.log(`Camel cased string: "${camelCasedString}"`);