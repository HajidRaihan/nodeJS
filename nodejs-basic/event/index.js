const {EventEmitter} = require('events');

const myEventEmitter = new EventEmitter();

//fungsi yang akan dijalankan ketika event coffee order terjadi
const makeCoffee = (name) => {
    console.log(`Kopi ${name} telah dibuat`);

};

const makeBill = (price) => {
    console.log(`Bill senilai ${price} telah dibuat `)
};
// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
// myEventEmitter.on('coffee-order', makeCoffee);
// myEventEmitter.on('coffee-order', makeBill);

// atau bisa dengan menambahkan fungsi yang khusus menangani event emitter
const onCoffeeOrderedListener = ({name, price}) => {
    makeCoffee(name);
    makeBill(price);
}

myEventEmitter.on('coffee-order', onCoffeeOrderedListener)


myEventEmitter.emit('coffee-order', { name: 'Tubbruk', price: '5000' });

