let result = "javascript" + 5; 
console.log(result); // "javascript5"
// `+` chuỗi sẽ thực hiện nối chuỗi nên "javascript" + 5 trở thành "javascript5".

result = "javascript" - 1; 
console.log(result); // NaN
//`-` không áp dụng cho chuỗi nên JavaScript sẽ chuyển đổi "javascript" thành số nhưng không được nên kết quả là NaN.

result = "3" + 2; 
console.log(result); // "32"
// `+` chuỗi sẽ thực hiện nối chuỗi nên "3" + 2 thành "32".

result = "5" - 4; 
console.log(result); // 1
// Chuỗi "5" được JavaScript chuyển thành số 5 sau đó 5 - 4 = 1.

result = isNaN("123"); 
console.log(result); // false
// "123"chuyển thành số 123 không phải NaN nên isNaN("123") trả về false.

result = isNaN("hello"); 
console.log(result); // true
// "hello" không thể chuyển thành số nên isNaN("hello") trả về true.

result = Number.isNaN("123"); 
console.log(result); // false
// "123" là chuỗi nên Number.isNaN() chỉ trả về true nếu nó là NaN mà "123" không phải NaN nên trả về false.

result = Number.isNaN(NaN); 
console.log(result); // true
// NaN là Not-a-Number cho nên Number.isNaN(NaN) trả về true.