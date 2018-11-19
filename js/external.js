console.log ("Hello from external javascript");
alert ("Welcome to my website");
var favColor = prompt ("What is your favorite color?");
alert (favColor + ' is my favorite color too.');
var lm = 3;
var bb = 5;
var herc = 1;
var ppd = 3;
var total = (lm + bb + herc)*ppd;
alert ("Total price of video rentals is " + total);
var goog = 400;
var googTime = 6;
var amaz = 380;
var amazTime = 4;
var face = 350;
var faceTime = 10;
var payTotal = (goog * googTime)+(amaz * amazTime)+(face * faceTime);
alert ("Payment total is " + payTotal);
var items = prompt ("How many items?");
items = Number(items);
var offer = confirm ("Is the offer valid?");
var premium = confirm ("Are you a premium member?");
if (offer && (items > 2 || premium)) {
    alert ("The offer is good");
}
else {
    alert("The offer is not good")
}