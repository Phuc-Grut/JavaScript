// let stayHello = function () {
//     console.log('heeloo world');
// }

// console.log(sayHello())

// hàm call back 
function ask (question, handleYes, handleNo) {
    const answer = confirm(question)
    if(answer === true) {
        handleYes();
    }
    else {
        handleNo();
    }
}
function handleYes () {
    console.log('Yes chose yest');
}
function handleNo () {
    console.log('No chose no');
}

ask("bạn có muộn tiếp tục thực hiện chương trình không", handleYes, handleNo);

ask(
    "Bạn có muốn tiếp tục thực hiện chương trình không",
    function () {
      console.log("You choose yes");
    },
    function () {
      console.log("You choose no");
    }
  );

  sayHello(); // Hello!

function sayHello() {
  console.log("Hello!");
}

// sayHello(); // Uncaught ReferenceError: sayHello is not defined

// let sayHello = function () {
//   console.log("Hello!");
// };