const fs = require('fs');
const path = require('path');
const { Readable } = require('stream');

const readableStream = fs.createReadStream(path.resolve(__dirname, 'input.txt') ,{
    highWatermark: 10

});

const writabelStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'), {
    highWaterMark: 15
})


readableStream.on('readable', () => {
    try {
        const msg = `${readableStream.read()}\n`
        writabelStream.write(msg);
        console.log(msg);
    }
    catch(error) {

    }
});

readableStream.on('end', () => {
    writabelStream.end();
});



