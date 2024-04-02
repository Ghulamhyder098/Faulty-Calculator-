let random =Math.random()
console.log(random)
let a = prompt("Enter First Number");
let c = prompt("Operator");
let b = prompt("Enter Second Number");


let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"*",
}
if(random>0.1){
    console.log(`${a}${c}${b}`);
    alert(`${eval(`${a}${c}${b}`)}`);
}else{
c=obj[c]
alert(`${eval(`${a}${c}${b}`)}`);
}