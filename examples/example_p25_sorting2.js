let products = [
    { prodId: 2, item: "Notepads (12 pk)", price: 12.29 },
    { prodId: 12, item: "Black Pens (12 pk)", price: 5.70 },
    { prodId: 13, item: "Blue Pens (12 pk)", price: 5.70 },
    { prodId: 22, item: "Stapler", price: 12.79 }
];
// products.sort(function (a, b) {
//     if (a.item < b.item) return -1;
//     else if (a.item == b.item) return 0;
//     else return 1;
// });
// let numProducts = products.length;
// for (let i = 0; i < numProducts; i++) {
//     console.log(products[i].item +
//         " $" + products[i].price.toFixed(2));
// }
// products.sort((a,b)=> {

//     console.log("a =", a.price, "b = ", b.price, "d = ", a.price - b.price);
//     return a.price - b.price;
// });
// zero if equal, 
//  or a negative if greater a<b, 
//  or a positive if less than a>b
products.sort((a, b) => a.price - b.price);
products.forEach(p => console.log(p.item + " $" + p.price.toFixed(2)))