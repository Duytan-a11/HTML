let n = Number(prompt("Nhập vào một số: "));

if (n < 0 || !Number(n))
{
    alert("Không hợp lệ");
} 
else {
    let count = 0;
    let num = 2;

    while (count < n) {
        let check = true;

        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                check = false;
                break;
            }
        }

        if (check) {
            document.writeln(`${num} `);
            count++;
        }
        num++;
    }
}