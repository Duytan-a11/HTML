let n = Number(prompt("Nhập vào số phần tử trong mảng"));
let digitChars = [];
let sum = 0;

if (isNaN(n) || n < 0 && n !== Number) {
    console.log("Số lượng phần tử không hợp lệ!");
} else if (n === 0) {
    console.log("Không có phần tử");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let input = prompt(`Nhập vào phần tử thứ ${i + 1}`);
        arr.push(input);

        if (!isNaN(input) && input.trim() !== "") {
            digitChars.push(input);
            sum += Number(input);
        }
    }

    if (digitChars.length > 0) {
        console.log(`${sum}`);
    } else {
        console.log("Không có phần tử nào là số");
    }
}