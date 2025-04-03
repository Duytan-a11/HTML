const cart = [

    { name: "Mèn mén", price: 30000, quantity: 2 },

    { name: "Mì tôm", price: 5000, quantity: 1 },

    { name: "Bánh bao", price: 15000, quantity: 3 }

];
let sum = 0;
for (let value in cart) {
  sum += cart[value].price * cart[value].quantity;
}
console.log(`tong tien don hang la ${sum}`);