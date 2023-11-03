// *** ===== Primitive Types ===== ***
var age = 3;
var firstName = 'John';
var isMarried = false;
var noValue = null;
var notAssigned = undefined;
var today = new Date();
// *** ===== Object Types ===== ***
var planets = ['Earth', 'Mars', 'Jupiter', 'Saturn'];
var luckyNumbers;
//***Classes***
var Phone = /** @class */ (function () {
    function Phone() {
    }
    return Phone;
}());
var phone = new Phone();
//***Object Literals***
var product = {
    name: 'pen',
    price: 15,
};
//***Functions***
var printer = function (content) {
    console.log(content);
};
//* Functions that returns the 'any' type
var place = '{"lat": 45, "lon": -70}';
var newLocation = JSON.parse(place);
console.log(newLocation);
