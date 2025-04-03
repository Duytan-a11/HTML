function checkCapSoCong(arr) {
    if (!Array.isArray(arr)) {
      return "dữ liệu không hợp lệ";
    }
    if (arr.length < 2) return false;
    let d = arr[1] - arr[0];
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i + 1] - arr[i] !== d) { 
        return false;
      }
    }
    return true;
  }
  console.log(checkCapSoCong([2, 4, 6, 8, 10]));
  console.log(checkCapSoCong([3, 6, 9, 12, 14]));
  console.log(checkCapSoCong("a, b, c"));