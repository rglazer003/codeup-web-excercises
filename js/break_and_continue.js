var num = prompt ("Enter an odd number between 1 and 50");
num = Number(num);
while (0===0){
    if (num%2===0 || num>50 || num<1){
        num = prompt ("Enter another number");
        num = Number(num)
    }
    else {
        break;
    }
}
console.log (num + " is odd and between 1 and 50");
for (var i =1; i<50; i++){
    if (i%2===0){
        continue;
    }
    if (i === num){
        console.log ("Skipping "+i);
    }
    else{
        console.log (i+" is an odd number")
    }
}