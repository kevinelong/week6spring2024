let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
];

//display list of item names (only) using map and for each
cart.sort((a,b)=>a.price - b.price).map(o => o.item + ":\t$" + o.price).forEach(s => console.log(s));
//chaining .().().() output of one function is the input of another function


const total = cart.reduce((a, v)=> (v.quantity * v.price) + a , 0);
console.log("$" + total.toFixed(2));