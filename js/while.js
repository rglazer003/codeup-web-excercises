var num = 2;

while (num < 65537){
    console.log(num);
    num = num*2;
}

var allCones = Math.floor(Math.random()*50)+50;
console.log(allCones+" cones to sell.");

do {
    var conesToSell = Math.floor(Math.random()*5)+1;
    if (conesToSell <= allCones){
        console.log (conesToSell + " cones sold.");
        allCones = allCones-conesToSell;
        conesToSell = Math.floor(Math.random()*5)+1;
    }
    else if (conesToSell > allCones){
        console.log("Can't sell "+conesToSell+" cones, only have "+allCones);
        conesToSell = Math.floor(Math.random()*5)+1;
    }
    else {
        console.log("Somethings wrong");
    }

} while (allCones > 0);
console.log ("All cones sold.");