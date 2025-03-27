let a = [4, 9, 22, 7, 1, 13, 36, 10, 1, 29];
let maxValue = 0;
let pos;

for (let i = 0; i < a.length; i++) {
    if (a[i] > maxValue) {
        maxValue = a[i];
        pos = i;
    }
}

if (a.length === 0) {
    console.log("Không có số lớn nhất");
}
else {
    console.log(`Số lớn nhất: ${maxValue}`);
    console.log(`Vị trí: ${pos}`);
}