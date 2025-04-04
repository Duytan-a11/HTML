let contact = [
    {
      id: 1,
      name: "tan",
      email: "duytan@gmail.com",
      phone: "0846229439",
    },
  ];
  
  function addContact() {
    let id;
    do {
      id = +prompt("Nhập ID:");
      if (contact.some((c) => c.id === id)) {
        alert("ID đã tồn tại, vui lòng nhập lại.");
      } else {
        break;
      }
    } while (true);
  
    let name = prompt("Hãy nhập tên:");
    let email = prompt("Hãy nhập email:");
    let phone = prompt("Hãy nhập số điện thoại:");
  
    contact.push({ id, name, email, phone });
  }
  
  function showContact() {
    if (contact.length === 0) {
      console.log("Danh bạ trống.");
      return;
    }
    contact.forEach((c) => {
      console.log(
        `ID: ${c.id}, Name: ${c.name}, Email: ${c.email}, Phone: ${c.phone}`
      );
    });
  }
  
  function searchContact() {
    let searchPhone = prompt("Hãy nhập số điện thoại cần tìm:");
    let found = false;
    for (let i = 0; i < contact.length; i++) {
      if (contact[i].phone.includes(searchPhone)) {
        alert(
          `ID: ${contact[i].id}, Name: ${contact[i].name}, Email: ${contact[i].email}, Phone: ${contact[i].phone}`
        );
        found = true;
      }
    }
    if (!found) {
      alert("Không tìm thấy số điện thoại.");
    }
  }
  
  function updateContact() {
    let findId = +prompt("Hãy nhập ID cần cập nhật:");
    let index = contact.findIndex((c) => c.id === findId);
    if (index !== -1) {
      contact[index].name = prompt("Nhập tên mới:", contact[index].name);
      contact[index].email = prompt("Nhập email mới:", contact[index].email);
      contact[index].phone = prompt("Nhập số điện thoại mới:", contact[index].phone);
      alert("Cập nhật thành công!");
    } else {
      alert("ID không tồn tại.");
    }
  }
  
  function deleteContact() {
    let findId = +prompt("Hãy nhập ID cần xóa:");
    let index = contact.findIndex((c) => c.id === findId);
    if (index !== -1) {
      contact.splice(index, 1);
      alert("Đã xóa contact khỏi danh sách.");
    } else {
      alert("Không tìm thấy ID.");
    }
  }
  
  function menu() {
    let choice;
    do {
      console.log(`
  1. Thêm Contact vào danh bạ.
  2. Hiển thị danh bạ.
  3. Tìm kiếm Contact theo số điện thoại.
  4. Cập nhật Contact theo ID.
  5. Xóa Contact theo ID.
  6. Thoát.`);
      choice = +prompt("Nhập lựa chọn:");
  
      switch (choice) {
        case 1:
          addContact();
          break;
        case 2:
          showContact();
          break;
        case 3:
          searchContact();
          break;
        case 4:
          updateContact();
          break;
        case 5:
          deleteContact();
          break;
        case 6:
          alert("Thoát khỏi chương trình.");
          break;
        default:
          alert("Lựa chọn không hợp lệ.");
      }
    } while (choice !== 6);
  }
  
  menu();
  