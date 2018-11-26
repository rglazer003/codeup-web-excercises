"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
var numberEntry = confirm ("Do you want to enter a number?");
if (numberEntry) {
    var number = prompt ("Please enter a number.");
    number = Number(number)
}
else {
    alert("Nevermind.")
}
if (isNaN(number) === false) {
    alert("Thats a number, lets continue.")
}
else {
    alert("Thats not a number.")
}
if (number%2===0){
    alert (number + " is even.")
}
else {
    alert (number + " is odd.")
}
alert (number + " plus 100 equals " + (number+100));
if (number > 0) {
    alert (number + " is positive.")
}
else {
    alert (number + " is negative.")
}
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color){
    if (color === "blue"){
        alert ("Blue is the color of the sky")
    }
    else if (color === "red"){
        alert ("Strawberries are red")
    }
    else if (color === "cyan"){
        alert ("I don't know anything about cyan")
    }
    else {
        alert ("I don't have anything to say about that")
    }
}
var colorChoice = prompt("Please enter a color");
analyzeColor(colorChoice);
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
analyzeColor(randomColor);
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColorSwitch (color2){
    var switchColor = color2;
    switch (switchColor) {
        case 'red':
            alert("Strawberries are red");
            break;
        case 'blue':
            alert("Blue is the color of the sky");
            break;
        case 'cyan':
            alert("I don't know anything about cyan");
            break;
        default:
            alert("I don't have anything to say about that");
    }
}
var colorTest = prompt ("Name a color");
analyzeColorSwitch(colorTest);
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
//Already did that in the if else if portion
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumberfunc, totalAmount){
    var LN = luckyNumberfunc;
    var discountAmount = totalAmount;
    switch (LN) {
        case 0:
            alert("Your discount is 0%, your total price is " + totalAmount + ".");
            break;
        case 1:
            var discount = 0.1;
            discountAmount = discountAmount*discount;
            totalAmount = totalAmount-discountAmount;
            alert ("Your discount is " + discount*100 + "%, your total amount is " + totalAmount + ".");
            break;
        case 2:
            var discount = 0.25;
            discountAmount = discountAmount*discount;
            totalAmount = totalAmount-discountAmount;
            alert ("Your discount is " + discount*100 + "%, your total amount is " + totalAmount + ".");
            break;
        case 3:
            var discount = 0.35;
            discountAmount = discountAmount*discount;
            totalAmount = totalAmount-discountAmount;
            alert ("Your discount is " + discount*100 + "%, your total amount is " + totalAmount + ".");
            break;
        case 4:
            var discount = 0.5;
            discountAmount = discountAmount*discount;
            totalAmount = totalAmount-discountAmount;
            alert ("Your discount is " + discount*100 + "%, your total amount is " + totalAmount + ".");
            break;
        case 5:
            alert("Congratulations! Your discount is 100%, your entire purchase is free!");
            break;
        default:
            alert ("That is not a valid lucky number.");
    }

}
var numberLucky = prompt("What is your lucky number (0-5)?");
numberLucky = Number(numberLucky);
var amount = prompt("What is your total amount?");
amount = Number(amount);
calculateTotal(numberLucky,amount);
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
luckyNumber = Number(luckyNumber);
amount = prompt("What is your total bill?");
amount = Number(amount);
calculateTotal(luckyNumber,amount);
