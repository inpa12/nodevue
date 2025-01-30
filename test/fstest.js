const fs = require('fs');

fs.readFile('test.json', 'utf-8', (err, data) => {
        if (err) return console.error(err);

        console.log("data>>", data);
});

console.log("------------------------");

let data2 = fs.readFileSync('test.json', 'utf-8');
console.log("data2>>", data2);

console.log("===================================");
