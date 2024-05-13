function greet(name){
    return `Hello ${name}!!!`;
}

console.log(greet("Class")); //pass in literal string

function functionalGreet(fnGetString){ //who to call
    //...
    return `Hello ${fnGetString()}!!!`; //call()
}
function kevin(){
    return `kevin`;
}
console.log(functionalGreet(kevin));