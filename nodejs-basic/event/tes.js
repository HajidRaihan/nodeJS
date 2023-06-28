const { EventEmitter } = require('events');
const myEventEmitter = new EventEmitter();

const appleAcademyisOpen = ({text}) =>{
    console.log(`${text}`);
}

myEventEmitter.on('daftar', appleAcademyisOpen)
myEventEmitter.emit('daftar', {text : 'DAFTAR GOBLOKKK!!!'})