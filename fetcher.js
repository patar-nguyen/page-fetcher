const request = require('request');
const fs = require('fs')

let arg = process.argv.slice(2);

request(arg[0], (error, response, body) => {
  if (error) {
    console.log("Error");
  }

  fs.writeFile(arg[1], body, err => {
    if (err) {
      console.log("Error");
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${arg[1]}`)
  }); 
});