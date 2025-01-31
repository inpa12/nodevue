const fs = require('fs');
const util = require('util');


fs.readFile(__dirname + '\\test.json', 'utf-8', (err, data) => {
        if (err) return console.error(err);

        console.log("data>>", data);
});

console.log("------------------------");

const msgfile = __dirname + "\\message.txt"
fs.writeFileSync(msgfile, 'Hello Node.js 세종대왕', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 

let data2 = fs.readFileSync(msgfile, 'utf-8');
console.log("data2>>", data2);

console.log("===================================");

