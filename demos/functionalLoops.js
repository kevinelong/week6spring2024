data = [
    {
        name: "class"
    },
    {
        name: "kevin"
    }
];
// function greet(text){
//     return `hello ${text}!!!`;
// }
// for(item of data){
//     console.log(greet(item.name))
// }
// function print(item){
//     console.log(greet(item.name))
// }
data.forEach((item) => { console.log(`hello ${item.name}!!!`) });
data.forEach(item => console.log(`hello ${item.name}!!!`));
//for each will call out funtion LATER

numbers = [12, 34, 56];
// pn =  n => console.log(n) //shorthand
// function pn(n){
//     console.log(n);//longhand
// }
// numbers.forEach(pn);
numbers.forEach(n => console.log(n));

menu = {
    breakfast: [
        { name: "pancakes", price: 3.99 },
        { name: "ham", price: 4.99 },
    ],
    lunch: [
        { name: "sandwich", price: 6.99 },
        { name: "soup", price: 2.99 }
    ]
}
console.log("PRICE OF SOUP: ", menu["lunch"][1].price);
//key is an identifier inside an Object that points to a value eg. {price:1.99}
// keys = Object.keys(menu)
// for(m of keys){
//     console.log(m) //section
//     for(item of menu[m]){
//         console.log(item.name, item.price); //one item
//     }
// }

// Object.keys(menu).forEach(m=> menu[m].forEach(i=> console.log(i.name, i.price)))
displayItem = i => console.log("\t", i.name, i.price);
displaySection = m => { 
    console.log(m + ":"); //headingf
    menu[m].forEach(displayItem); //child loop
};
Object.keys(menu).forEach(displaySection); //section loop

