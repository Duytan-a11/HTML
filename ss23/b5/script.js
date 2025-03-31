let n = Number(prompt(`nhap so luong phan tu cua mang`));
let array = [];
for (let i = 1; i <= n; i++) {
  array[i] = Number(prompt(`nhap phan tu thu ${i} vao trong mang`));
}
let sum = 0,
  dem = 0;
for (let i = 0; i <= n; i++) {
  if (isNaN(array[i])) {
    continue;
  } else {
    sum = sum + Number(array[i]);
    dem++;
  }
}

if (dem === 0) {
  console.log("Khong co phan tu nao la so");
}
if (n === 0) {
  console.log("mang khong co phan tu");
}
if (n < 0) {
  console.log("so luong pt hem duoc em");
}
if (dem > 0) {
  console.log(sum);
}
