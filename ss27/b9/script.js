function sortEvens(arr) {
    let evens = arr.filter(num => num % 2 === 0);
    evens.sort((a, b) => a - b);
    
    let evenIndex = 0;
    return arr.map(num => {
        if (num % 2 === 0) {
            return evens[evenIndex++];
        }
        return num;
    });
}

console.log(sortEvens([5, 3, 2, 8, 1, 4]));
console.log(sortEvens([10, 7, 6, 3, 8]));
console.log(sortEvens([1, 9, 7]));
