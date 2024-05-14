let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    // TODO: fill the array with 10 candies of various
    // price ranges
];

console.log("\nWhich candies costs less than $4.00?");
// products.filter(p => p.price < 4).map(p => p.product ).forEach(s => console.log(s))
products.filter(p => p.price < 4).forEach(p => console.log(p.product));

console.log(`\nWhich candies has "M&M" its name?`);
products.filter(p => p.product.includes("M&Ms")).forEach(p => console.log(p.product));

console.log(`\nDo we carry "Swedish Fish"?`);
console.log(products.find(p => p.product == "Swedish Fish") ? "Yes" : "No");
//USES falseyness of undefined above, or length zero below
// ? TERNARY OPERATOR: if x ? true value : false value 
//console.log(products.filter( p => p.product === "Swedish Fish").length ? "Yes" : "No");