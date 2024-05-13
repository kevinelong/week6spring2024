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

["apples", "banana", "cherry"].forEach((fruit, index, list) => console.log(index, fruit, list.length));

