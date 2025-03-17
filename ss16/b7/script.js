let math = prompt("Nhập điểm môn Math:");
math = parseFloat(math);
let physics = prompt("Nhập điểm môn Physics:");
physics = parseFloat(physics);
let chemistry = prompt("Nhập điểm môn Chemistry:");
chemistry = parseFloat(chemistry);
let Diemtb = (math + physics + chemistry) / 3;
alert("Điểm trung bình là: " + Diemtb);