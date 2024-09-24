// hàm alert 
// alert("say hello")

// hàm confirm
// const result = confirm("Bạn có chắn chắn muốn chết không");
// console.log(result);    

// hàm prompt
//result = prompt(title,[defaultValue])
// const name = prompt("nhập vào tên của bạn","atony");
// console.log("Tên của bạn là : " + name);

function sayHello(name = "Ahaha",name2) {
    console.log('Hello');
    console.log('world');
    console.log('Hên'+name);
    console.log('Hen'+name2);
}

// sayHello("Antony","lukuku"); 
// sayHello("Antony","lukuku");

function sum(a, b) {
    if (a === null || a === undefined) {
      return console.log("tham số không hợp lệ");
    }
    if (b === null || b === undefined) {
      return console.log("tham số không hợp lệ");
    }
    return console.log(a + b);
  }
  
  sum(1, 10);
  sum();
  sum();


  ///


  
// Biến cục bộ

function sayHello() {
    let message = "Hello from techmely";
    console.log(message);
  }
  
  sayHello();
  
  // Biến toàn cục
  
  let message2 = "Hello from from kungfutech";
  function sayHello() {
    let message2 = "Hi from kungfutech";
    message2 = "Hello world";
    console.log(message2);
  }
  
  sayHello();
  console.log(message2);
  
  // Truyền tham số vào hàm
  
  let message3 = "Hello from kungfutech";
  
  function sayHello(message3) {
    message3 = "Hi from kungfutech";
    console.log(message3);
  }
  
  sayHello();
  console.log(message3);