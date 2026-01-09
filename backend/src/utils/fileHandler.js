const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/products.json');

const readFile = () => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

const writeFile = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

module.exports = {
  readFile,
  writeFile,
};
