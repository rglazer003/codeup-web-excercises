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
for (var p=1; p<10; p++){
    if (p === 1){
        console.log(1)
    }
    else if (p === 2){
        console.log(22);
    }
    else if (p === 3){
        console.log(333);
    }
    else if (p === 4){
        console.log(4444);
    }
    else if (p === 5){
        console.log(55555);
    }
    else if (p === 6){
        console.log (666666)
    }
    else if (p === 7){
        console.log (7777777);
    }
    else if (p === 8){
        console.log (88888888);
    }
    else if (p === 9){
        console.log (999999999);
    }
    else {
        break;
    }
}
for (var d=100; d>4; d=d-5){
    console.log(d);
}