let char = prompt("Nhập vào một ký tự: ");
if ((char.length) === 1 && char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
    alert(`Ký tự ${char} là chữ cái`);
} else {
    alert(`Ký tự ${char} không phải là chữ cái`);
}