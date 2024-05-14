let times = 1;
function compareAscendingNumber(a, b) {
    console.log(times++, a, b);
    return a - b; // b - a is reverse

    // if (a < b) return -1; // right order
    // else if (a == b) return 0; // same values
    // else return 1; // swap, wrong order

    // if (a < b) { //swap lt < for > gt
    //     return -1 // right order - any negative
    // } else if (a == b) {
    //     return 0; // same values - exactly equall
    // } else {
    //     return 1; // swap, wrong order - any positive
    // }
}
let numbers = [3, 27, 400, 1, 111, 5];
// numbers.sort(compareAscendingNumber);
numbers.sort((a, b) => a - b); //simple inline sort for numbers
console.log(numbers);
// Results: 1, 3, 5, 27, 111, 400

