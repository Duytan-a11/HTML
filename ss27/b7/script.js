function findMissingNumber(arr) {
    let a = Math.min(...arr);
    let b = Math.max(...arr);
    let n = b - a + 1;

    let totalFull = (a + b) * n / 2;
    let totalCurrent = arr.reduce((sum, num) => sum + num, 0);

    return totalFull - totalCurrent;
}

console.log(findMissingNumber([1, 2, 3, 5]));
console.log(findMissingNumber([10, 11, 12, 14]));
console.log(findMissingNumber([100, 101, 103, 104]));
