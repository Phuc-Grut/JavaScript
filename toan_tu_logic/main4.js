 // toán tử Or 
//  console.log(true || true);  // true
//  console.log(true || false); // true
//  console.log(false || true); // true
//  console.log(false || false); // false

//  console.log(1 || 0); // 1
//  console.log(null || 2); // 2
//  console.log("" || undefined || 0 || 10); // 10
//  console.log(null || 100 || 5 || undefined); // 100
//  console.log("" || 0 || null); // null
 
//  // Ví dụ bài toán hiển thị tên người dùng trên trang web, biết thông tin người dùng có hai trường liên quan đến tên là fullName và nickName. Ưu tiên hiển thị tên fullName trước. Nếu fullName rỗng thì hiển thị nickName. Nếu nickName cũng rỗng thì hiển thị "Người dùng ẩn danh".
 
//  const fullName = "HoaPN";
//  const nickName = "Thaycacac";
//  const displayName = fullName || nickName || "Người dùng ẩn danh";
//  console.log(displayName);
 
//  true || console.log("Thực hiện câu lệnh 1");
//  false || console.log("Thực hiện câu lệnh 2");
 
//  // Toán tử AND
 
//  console.log(true && true); // true
//  console.log(true && false); // false
//  console.log(false && true); // false
//  console.log(false && false); // false
 
//  console.log(true && true && true); // true
//  console.log(true && false && true); // false
//  console.log(false && true && false); // false
//  console.log(false && false && false); // false
 
//  console.log(1 && 0); // 0
//  console.log(null && 2); // null
//  console.log(10 && "" && undefined && 0); // ""
//  console.log("n" && undefined && 10); // undefined
//  console.log(10 && "a"); // "a"
 
//  true && console.log("thực hiện câu lệnh 1");
//  false && console.log("thực hiện câu lệnh 2");
 
//  // Toán tử NOT
 
//  console.log(!true); // false
//  console.log(!false); // true
 
//  console.log(!"hello"); // false
//  console.log(!100); // false
//  console.log(!""); // true
//  console.log(!0); // true
//  console.log(!null); // true
//  console.log(!undefined); // true
 
//  console.log(!!"hello"); // true
//  console.log(!!100); // true
//  console.log(!!""); // false
//  console.log(!!0); // false
//  console.log(!!null); // false
//  console.log(!!undefined); // false
 
//  // Thứ tự ưu tiên của toán tử logic
//  // Toán tử số học > Toán tử so sánh > Toán tử logic
//  // ! > && > ||
 
//  console.log(1 + 2 || (!"javascript" && 4 > 5));
//  // 3 || (!"javascript" && 4 > 5)
//  // 3 || (!"javascript" && false)
//  // 3 || false && false
//  // 3 || false
//  // 3



 // Câu lệnh điều kiện if

// if(điều kiện) {
//   thực thi câu lệnh
// }

// const x = 3;

// if (x % 2 === 0) {
//   console.log(`số x là ${x}`);
//   console.log("x là số chẵn");
// }

// if (0) {
//   console.log("thực hiện câu lệnh");
// }

// const isEven = x % 2 === 0;
// if (isEven) {
//   console.log("x là số chẵn");
// }

// // Mệnh đề else

// if (x % 2 === 0) {
//   console.log("x là số chẵn");
// } else {
//   console.log("x là số lẻ");
// }

// // Nhiều mệnh đề else if nối tiếp

// const age = 20;

// if (age < 18) {
//   console.log("Too young");
// } else if (age > 60) {
//   console.log("Too old");
// } else {
//   console.log("OK");
// }

// // Toán tử 3 ngôi

// const enoughAge = age < 18 ? "Too young" : "OK";

// console.log(enoughAge);

// const message = age < 18 ? "Too young" : age > 60 ? "To old" : "OK";

// console.log(message);

// // Cho người dùng nhập 2 số in ra số lớn hơn

// const getMax = (a, b) => {
//   if (a > b) return a;
//   else return b;
// };

// const value1 = prompt();
// const value2 = prompt();

// console.log("Giá trị lớn hơn là", getMax(value1, value2));

// // Cho người dùng nhập vào 3 số và kiểm tra xem 3 số đó có thoả mãn là một tam giác hay không

// const isTriangle = (a, b, c) => {
//   if (a <= 0 || b <= 0 || c <= 0) {
//     console.log("Không thoả mãn");
//     return;
//   } else {
//     if (a + b > c && a + c > b && c + b > a) {
//       console.log("Thoả mãn");
//     } else {
//       console.log("Không thoả mãn");
//     }
//   }
// };

// const value3 = prompt();
// const value4 = prompt();
// const value5 = prompt();

// isTriangle(+value3, +value4, +value5);


// bài tập switch case

// Lệnh switch case

const x = 2 + 3 + 1;
const y = 1;

switch (x) {
  case y + 3:
    console.log("Nhỏ hơn");
    break;
  case y + 4:
    console.log("Bằng");
    break;
  case y + 5:
    console.log("Lớn hơn");
    break;
  default:
    console.log("Không xác định");
}

const n = 4;
switch (n) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    console.log("Đi làm");
    break;
  case 7:
  case 8:
    console.log("Được nghỉ");
    break;
  default:
    console.log("Không xác định");
}