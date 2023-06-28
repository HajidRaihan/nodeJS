const fs = require('fs');
const path = require('path');
const link = path.resolve(__dirname, 'notes.txt');

const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};

fs.readFile(link, 'UTF-8', fileReadCallback)


// const data = path.resolve(__dirname, 'notes.txt');

// console.log(data)