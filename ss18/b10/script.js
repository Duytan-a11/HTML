let num = prompt("Nhập vào một số");

let hundred = Math.floor(num / 100);
let ten = Math.floor((num % 100) / 10);
let one = num % 10;

let result = "";

if (hundred === 1) result += "Một trăm";
else if (hundred === 2) result += "Hai trăm";
else if (hundred === 3) result += "Ba trăm";
else if (hundred === 4) result += "Bốn trăm";
else if (hundred === 5) result += "Năm trăm";
else if (hundred === 6) result += "Sáu trăm";
else if (hundred === 7) result += "Bảy trăm";
else if (hundred === 8) result += "Tám trăm";
else if (hundred === 9) result += "Chín trăm";

if (hundred > 0 && ten === 0 && one > 0) {
    result += " linh";
}

if (ten === 1) result += (result ? " " : "") + "mười";
else if (ten === 2) result += (result ? " " : "") + "hai mươi";
else if (ten === 3) result += (result ? " " : "") + "ba mươi";
else if (ten === 4) result += (result ? " " : "") + "bốn mươi";
else if (ten === 5) result += (result ? " " : "") + "năm mươi";
else if (ten === 6) result += (result ? " " : "") + "sáu mươi";
else if (ten === 7) result += (result ? " " : "") + "bảy mươi";
else if (ten === 8) result += (result ? " " : "") + "tám mươi";
else if (ten === 9) result += (result ? " " : "") + "chín mươi";

if (one === 1 && ten > 1) result += " mốt";
else if (one === 1) result += (result ? " " : "") + "hai";  
else if (one === 3) result += (result ? " " : "") + "ba";  
else if (one === 4) result += (result ? " " : "") + "bốn";  
else if (one === 5 && ten > 0) result += " lăm";
else if (one === 5) result += (result ? " " : "") + "năm";  
else if (one === 6) result += (result ? " " : "") + "sáu";  
else if (one === 7) result += (result ? " " : "") + "bảy";  
else if (one === 8) result += (result ? " " : "") + "tám";  
else if (one === 9) result += (result ? " " : "") + "chín";  

result = result.charAt(0).toUpperCase() + result.slice(1);
console.log(result);