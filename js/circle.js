(function() {
    "use strict";

// create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            var area = Math.pow(circle.radius, 2)*Math.PI;
            // TODO: complete this method
            // hint: area = pi * radius^2

            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding === true){
                var round = this.getArea();
                round = Math.round(round);
            }
            else{
                var round = this.getArea();
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + round);
        }
    };

// log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
// TODO: Change the radius of the circle to 5.
    circle.radius = 5;
// var circle2 = {
//     radius: 5,
//
//     getArea2: function () {
//         var area2 = Math.pow(circle2.radius, 2)*Math.PI;
//         // TODO: complete this method
//         // hint: area = pi * radius^2
//
//         return area2; // TODO: return the proper value
//     },
//
//     logInfo2: function (doRounding) {
//         // TODO: complete this method.
//         if (doRounding === true){
//             var round2 = this.getArea2();
//             round2 = Math.round(round2);
//         }
//         else{
//             var round2 = this.getArea2();
//         }
//         // If doRounding is true, round the result to the nearest integer.
//         // Otherwise, output the complete value
//
//         console.log("Area of a circle with radius: " + this.radius + ", is: " + round2);
//     }
// };
// log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
