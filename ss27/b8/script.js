function maxNumber(num) {
    return parseInt(num.toString().split('').sort((a, b) => b - a).join(''));
}

console.log(maxNumber(1234));
console.log(maxNumber(9102)); 
console.log(maxNumber(5678));

