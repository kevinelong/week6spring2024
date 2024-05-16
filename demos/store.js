
const catalog = [
    { name: "pencil", price: 1.00 },
    { name: "sharpener", price: 2.00 }, //index 1
    { name: "tablet", price: 3.00 },
];

let cart = [];
const currency = v => "$" + v.toFixed(2);
const showCatalog = () => catalog.forEach((p, i) => console.log("\n", i, p.name, p.price));
const addToCart = (product_index, qty = 1) => cart.push({ "product": catalog[product_index], "qty": qty });
const updateQty = (line_index, qty) => cart[line_index].qty = qty; 
const removeLine = (line_index) =>  cart.splice(line_index, 1); //remove from array

const showCart = () => {
    console.log("\nCART:");
    cart.forEach((l, i) => console.log("\t", i, l.product.name, currency(l.product.price), l.qty, currency(l.product.price * l.qty)));
    console.log("TOTAL: " + currency(cart.reduce( (a, l) => a + (l.qty * l.product.price), 0)));
};

//TESTS
showCatalog()
addToCart(1, 2) //two sharpeners
addToCart(2, 1) // on tablet
showCart()
updateQty(0, 3)
showCart()
removeLine(1) // remove tablet
showCart()