let sum = (a , b) => {
    console.log('tính tổng 2 số')
    return a + b;
}
console.log(sum(1,3));

  const ask = (question, handleYes, handleNo) => {
    const answer = confirm(question)
    if(answer === true) {
        handleYes();
    }
    else {
        handleNo();
    }
  }
ask(' bạn có muốn tiếp tục chương trình không',
    ()=>console.log("You choose yes"),
    ()=>console.log("You choose no")
);
  

//Boolean 
// truthy

console.log(Boolean(true))
console.log(Boolean(1))
console.log(Boolean(-1))
console.log(Boolean(100n))
console.log(Boolean(1.5))
console.log(Boolean(-1.5))
console.log(Boolean("0"))
console.log(Boolean("abc"))
console.log(Boolean([]))
console.log(Boolean({x: 1}))
console.log(Boolean(Infinity))
console.log(Boolean(-Infinity))
console.log(Boolean(alert))

// falsy

console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))