let arr = [];
for (let i = 0; i < 2; i++) {
  let input = prompt("Nhập phần tử:");
  let num = Number(input);
  if (isNaN(num)) {
    console.log("Giá trị nhập không hợp lệ, hãy nhập số!");
    i--;
  } else {
    arr.push(num);
  }
}
let sum = arr.reduce((acc, cur) => acc + cur);
let difference = arr.reduce((acc, cur) => acc - cur);
let multiply = arr.reduce((acc, cur) => acc * cur);
let quotient = arr.reduce((acc, cur) => acc / cur);
let choice;
do {
  console.log(`
1.Cộng hai số.
2.Trừ hai số.
3.Nhân hai số.
4.Chia hai số.
5.Thoát.`);
  choice = +prompt("nhap lua chon");
  switch (choice) {
    case 1:
      console.log(`tong hai phan tu ${sum}`);
      break;
    case 2:
      console.log(`thuong cua hai phan tu ${difference}`);
      break;
    case 3:
      console.log(`tich cua hai phan tu ${multiply}`);
      break;
    case 4:
      console.log(`thuong cua hai phan tu ${quotient}`);
      break;
    case 5:
      console.log("thoat vong lap");
      break;
    default:
      console.log("khong hop le");
      break;
  }
} while (choice != 5);