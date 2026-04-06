const url = require("url");
const address = 'https://www.example.com/category/search?name=a&age=32#section4';
const myURL = url.parse(address,true);
console.log(myURL);