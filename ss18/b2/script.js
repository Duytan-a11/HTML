let number = prompt("Nhập vào điểm: ");
number = Number(number);

if (number >= 8) {
    console.log("Giỏi");
}
else if (number >= 6.5 && number < 7.9) {
    console.log("Khá");
}
else if (number >= 5 && number < 6.4) {
    console.log("Trung bình");
}
else {
    console.log("Yếu");
}