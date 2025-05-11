var parser = require('xml-js');

const xml = require('fs').readFileSync('junit.xml', 'utf-8');

const options = {compact: true, ignoreComment: true, spaces: 4};

const result = parser.xml2json(xml, options)

const xmlData = fs.readFileSync('./src/data/junit.xml', 'utf-8');

console.log(result);
