const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('ini merupakan teks baris pertama\n');
writableStream.write('ini merupakan teks baris kkedua!\n');
writableStream.end();
