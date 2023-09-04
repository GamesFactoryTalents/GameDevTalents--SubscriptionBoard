const fs = require('fs');
const csv = require('csv-parser');

let subscribers = [];

async function main() {
  fs.createReadStream('./src/generated/personregistration.csv')
    .pipe(csv())
    .on('data', (row) => {
      subscribers.push(row);
    })
    .on('end', () => {
      const subscribersString = JSON.stringify(subscribers, null, 2);
      console.log(subscribersString);
      fs.writeFileSync('./src/generated/subscribers.json', subscribersString);
    });
}

main();
