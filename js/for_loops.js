function showMultiplicationTable (num){
    for (var i=1; i<=10; i++){
        console.log(num + " x " + i + " = " + num*i);
    }
}
var mult = prompt("Enter a number");
mult=Number(mult);
showMultiplicationTable(mult);

for (var j=1; j<=10; j++){
    var someNum = Math.floor(Math.random()*180)+20;
    if (someNum%2===0){
        console.log(someNum + " is even");
    }
    else {
        console.log(someNum + " is odd");
    }
}
for (var i = 1; i < 10; i++) {
    var  message = "";
    var length = 0;
    while (length < i ) {
        message = message + i;
        length++;
    }
    console.log(message)
}
for (var d=100; d>4; d=d-5){
    console.log(d);
}