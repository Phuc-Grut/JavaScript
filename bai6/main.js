// alert('Hello world  !');
// console.log('Hello world');
// console.log('Hello');  
// hằng trong javascript

// const Pi = 3.14159;
// console.log(Pi);  

// // lợi ích của hằng, hằng không thay đổi giá trị, biến có thể thay đổi giá trị
// // ko sử dụng hadcode 

//     // Ví dụ về biến
// let x = 10;
// console.log(x);
// x = 20;
// console.log(x);
 
//     // Ví dụ về h��ng
// const y = 10;

// // Không thể thay đ��i giá trị của h��ng
// // ví dụ về kiểu dữ liệu

// let isWebloaded = false;
// console.log(isWebloaded);

// let languge = null;
// console.log(languge)


// Chuyển đổi kiểu dữ liệu sang string
// console.log(String(1)); // "1"
// console.log(String(NaN)); // "NaN"
// console.log(String(Infinity)); // "Infinity"
// console.log(String(true)); // "true"
// console.log(String(false)); // "false"
// console.log(String(null)); // "null"
// console.log(String(undefined)); // "undefined"


// Chuyển đổi kiểu dữ liệu sang number

// console.log("10" / "2")
// console.log("10" / 2)
// console.log(10 / "2")

// console.log(Number("")); // 0
// console.log(Number("Hello")); // NaN
// console.log(Number("10")); // 10
// console.log(Number(" ")); // 0
// console.log(Number(" 99 ")); // 99
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN

// Chuyển đổi kiểu dữ liệu sang boolean
// console.log(Boolean(0)); // false
// console.log(Boolean(1)); // true
// console.log(Boolean(10n)); // true
// console.log(Boolean(Infinity)); // true
// console.log(Boolean("")); // false
// console.log(Boolean("hello")); // true
// console.log(Boolean("  ")); // true
// console.log(Boolean(NaN)); // false
// console.log(Boolean(undefined)); // false


// Toán tử số học

// console.log(5 + 2); // 7
// console.log(5 - 2); //3
// console.log(5 * 2); //10
// console.log(5 / 2); //2.5
// console.log(5 % 2); // 1
// console.log(5 ** 2); // 25

// Toán tử ghép string +
// console.log("5" + 2); // 52
// console.log("5" - 2); // 3
// console.log("5" * 2); // 10
// console.log("5" / 2); // 2.5
// console.log("5a" % "2"); // NaN
// console.log("5b" ** "2"); // NaN

// console.log("hello" + "world!");
// console.log(1 + "2"); // 12
// console.log("1" + true); // 1true

// // Toán tử chuyển đổi kiểu dữ liệu thành number +

// console.log(+1); // 1
// console.log(+true); // 1
// console.log(+false); // 0
// console.log(+"abcde"); // NaN
// console.log(+""); // 0
// console.log(+undefined); // NaN
// console.log(+null); // 0
// console.log(+{ x: 1 }); // NaN

// // Toán tử gán

// let k = 1;
// const message = "Hello, world!";
// let result = 1 + 2 + 3 + 4;
// // let y, z, t;
// y = z = t = 10;

// console.log(k, message, result, y, z, t);

// let m = 1;

// m = 5; // n = n + 5
// console.log(m);

// // Toán tử tăng 1 đơn vị và giảm 1 đơn vị

// let n = 1;
// n--;

// console.log(n);

// let a = 2;
// //let x = ++a; // a++; let x=a
// console.log(a); // 3
// console.log(x); // 3

// let a2 = 2;
// let x2 = a2++; // let x=a; a++
// console.log(a2); // 3
// console.log(x2); // 2

// // Toán tử dấu phẩy

// let a3 = 1;
// let x3 = ((a3 = a3 + 1), a3 + 4);
// console.log(a3); // 2
// console.log(x3); // 6



// Toán tử so sánh là gì

let a = 1;
let b = 2;

// console.log(a > b); // so sánh lớn hơn //false
// console.log(a < b); // so sánh lớn hơn // true
// console.log(a >= b); // so sánh lớn hơn hoặc bằng // false
// console.log(a <= b); // so sánh nhỏ hơn hoặc bằng // true
// console.log(a == b); // so sánh bằng không nghiêm ngặt // false
// console.log(a === b); // so sánh bằng nghiêm ngặt // false
// console.log(a != b); // so sánh khác không nghiêm ngặt // true
// console.log(a !== b); // so sánh khác nghiêm ngặt // true

// So sánh string trong javascript

// console.log("A" < "Z") //true
// console.log("Small" < "Smart") //true
// console.log("Big" < "BigBang") // true

// // So sánh khác kiểu dữ liệu trong javascript

// console.log("5" > 4); // true
// console.log("01" == 1); // true
// console.log("11" == 1); //false
// console.log(true == 1); // true
// console.log(false == 0); // true
// console.log("" == 0); // true
// console.log("0" == 0); // true
// console.log("" == "0") // false
// console.log(false == "") // true

// // So sánh nghiêm ngặt

// console.log("" == 0); // true
// console.log("" === 0); // false
// console.log("" != 0); // false
// console.log("" !== 0); // true

// console.log(typeof null)
// console.log(typeof undefined)
// console.log(null === undefined) // false
// console.log(null == undefined) // true

// console.log(null > undefined); // false
// console.log(null < undefined); // false
// console.log(null >= undefined); // false
// console.log(null <= undefined); // false

// // So sánh null với 0

// console.log(null > 0); // false (1)
// console.log(null >= 0); // true (2)
// console.log(null == 0); // false (3)

// // So sánh undefined với 0

// console.log(undefined > 0); // false (1)
// console.log(undefined >= 0); // false (2)
// console.log(undefined == 0); // false (3)

// // Thứ tự ưu tiên của các toán tử so sánh

// console.log(3>2>1)// false

