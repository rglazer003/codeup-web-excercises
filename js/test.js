var array = [1,2,3,4,5,6,7,8];
function sortArray (a, b){
    return b-a;
}
array.sort(sortArray);
console.log(array[0]);
array.sort();
console.log(array[0]);

var sumArray = [[1,2,3], [4,5,6], [7,8,9]];
var total = 0;
function sum (array){
        for (var i=0; i<array.length; i++){
            total += array[i][0];
            total += array[i][1];
            total += array[i][2];
        }
}
sum(sumArray);
console.log(total);