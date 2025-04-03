let arr = []
let n = +prompt(`nhập số phần tử trong mảng`)
let m = +prompt(`nhập số mảng con`)
function divideArray (m,arr){
    for (let i = 0; i < m; i++){
        let result = [];
        let size = Math.ceil(arr.length / m);
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    }
}
if (n <= 0 || isNaN(n)){
    console.log(`Mảng không có phần tử nào`)
}else{
    for (let i = 0; i < n; i++){
        arr[i] = +prompt(`nhập vào phần tử index[${i}]`)
    }
    console.log(`Mảng ban đầu:`, arr)
    console.log(`Mảng sau khi chia mảng con:`, divideArray(m,arr))
}