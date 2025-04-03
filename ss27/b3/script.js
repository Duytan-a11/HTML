let dai = +prompt("nhap chieu dai");
let rong = +prompt("chieu rong");
let bankinh = +prompt("nhap ban kinh");
const pi = 3.14;
let choice;
let stron = pi * (bankinh * bankinh);
let ctron = 2 * pi * bankinh;
let shcn = dai * rong;
let chcn = 2 * (dai + rong);
do {
  console.log(`
1.Tính diện tích hình tròn.
2.Tính chu vi hình tròn.
3.Tính diện tích hình chữ nhật.
4.Tính chu vi hình chữ nhật.
5.Thoát.
`);
  choice = +prompt("nhap lua chon");
  switch (choice) {
    case 1:
      console.log(`diện tích hình tròn ${shinhtron}`);

      break;
    case 2:
      console.log(`chu vi hình tròn ${chinhtron}`);
      break;
    case 3:
      console.log(`diện tích hình chữ nhật ${shcn}`);
      break;
    case 4:
      console.log(`chu vi hình chữ nhật ${chcn}`);
      break;
    case 5:
      console.log("thoat vong lap");
      break;
    default:
      console.log("khong hop le");
      break;
  }
} while (choice != 5);