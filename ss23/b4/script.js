let n = Number(prompt("Nhập vào số phần tử trong mảng"));
let count = 0;
let digitChars = [];

if (isNaN(n) || n < 0 && n !== Number) {
    console.log("Dữ liệu không hợp lệ");
} else if (n === 0) {
    console.log("Không có ký tự số");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let char = prompt(`Nhập vào ký tự thứ ${i + 1}`);
        arr.push(char);

        if (char >= '0' && char <= '9') {
            digitChars.push(char);
        }
    }
    
    if (digitChars.length > 0) {
        console.log(digitChars.join(' '));
    } else {
        console.log("Không có ký tự số");
    }
}