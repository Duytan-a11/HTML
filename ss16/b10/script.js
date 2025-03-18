let num1 = prompt("Nhập số thứ nhất:");
num1 = parseFloat(num1);
let num2 = prompt("Nhập số thứ hai:");
num2 = parseFloat(num2);
soNgauNhien = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
alert("Số ngẫu nhiên là: " + soNgauNhien);
