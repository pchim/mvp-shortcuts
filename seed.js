import fs from 'fs';

const shortcuts = JSON.parse(fs.readFileSync('./data.json')).data;
console.log(shortcuts);