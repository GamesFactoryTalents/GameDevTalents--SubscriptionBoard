const fs = require('fs');
const csv = require('csv-parser');

let subscribers = [];

async function main() {
  fs.createReadStream('./src/generated/vacancies.csv')
    .pipe(csv())
    .on('data', (row) => {
      console.log(/(?:\\[rn]|[\r\n]+)+/g.test(row.jobDescription));
      row.jobDescription = row.jobDescription.replace(/(?:\\[rn]|[\r\n]+)+/g,'<br/>');
      row.requirements = row.requirements.replace(/(?:\\[rn]|[\r\n]+)+/g,'<br/>');
      row.responsibilities = row.responsibilities.replace(/(?:\\[rn]|[\r\n]+)+/g,'<br/>');
      console.log(row);
      subscribers.push(row);
    })
    .on('end', () => {
      const subscribersString = JSON.stringify(subscribers, null, 2);
      fs.writeFileSync('./src/generated/subscribers.json', subscribersString);
    });
} 

main();
