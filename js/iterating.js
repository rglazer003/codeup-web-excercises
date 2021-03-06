(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["Dan", "John", 'Eric', "Kyle"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    console.log("Now with a for loop:");
    for (var i = 0; i < names.length; i++){
        console.log(names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log ("Listing names with a forEach loop:");
    names.forEach(function (name) {
        console.log (name);
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    var numArray = [1,2,3,4,5];
    function first(array){
        console.log(array[0]);
    }
    first(numArray);

    function second(array) {
        console.log(array[1]);
    }
    second(numArray);

    function last (array){
        //Changing -1 to something else will change the pull position
        //Getting rid of the [0] lets you pull multiple elements
        //ie array.slice(-3) will result in [3, 4, 5]
        console.log(array.slice(-1)[0]);
    }
    last(numArray);

    function oneHundred() {
        var hundredArray = [];
        for (var i = 1; i <= 100; i++){
            hundredArray.push(i);
        }
        return hundredArray;
    }
    console.log(oneHundred());

    function reverse (array){
        var reverseArray = array.slice().reverse();
        console.log(reverseArray);
    }
    var testArray = [1,2,3,4,5,6,7,8,9];
    console.log("Here is the test array:");
    console.log(testArray);
    console.log('Here is that array reversed:');
    reverse(testArray);

    function sumAll (array){
        var sum = 0;
        for (i=0; i<array.length; i++){
            sum += array[i];
        }
        return sum;
    }
    console.log("The test array is " + oneHundred());
    console.log("The test array summed is " + sumAll(oneHundred()));

    function multiplyAll (array){
        var sum = 1;
        for (i=0; i<array.length; i++){
            sum *= array[i];
        }
        return sum;
    }
    console.log("The test array is " + oneHundred());
    console.log("The test array multiplied is " + multiplyAll(oneHundred()));
})();
