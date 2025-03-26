let a = [1, 2, 3, 4, 5, 9, 10, 3, 4, 5, 11, 11];
let countValue = {};

for (let i = 0; i < a.length; i++) {
    let num = a[i];

    if (!countValue[num]) {
        countValue[num] = 1;
    } else {
        countValue[num]++;
    }
}
let max = 0;
let number = null;

for (let value in countValue) {
    if (countValue[value] > max) {
        max = countValue[value];
        number = value;
    } else if (countValue[value] === max && value < number) {
        number = value;
    }
}

console.log(`Số ${number} xuất hiện nhiều nhất với ${max} lần.`);