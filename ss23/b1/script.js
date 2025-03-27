let a = [4, 9, 22, 7, 1, 13, 36, 10, 1, 29];
let count = []
for (let i = 0; i < a.length; i++) {
    (a[i] > 10) ? count.push(a[i]) : null;
}

(count.length === 0) ? console.log("Không có số nào lớn hơn 10") : console.log(count);