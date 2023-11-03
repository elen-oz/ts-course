// *** ===== Primitive Types ===== ***
let age: number = 3;

let firstName: string = 'John';
let isMarried: boolean = false;

let noValue: null = null;
let notAssigned: undefined = undefined;

let today: Date = new Date();

// *** ===== Object Types ===== ***

let planets: string[] = ['Earth', 'Mars', 'Jupiter', 'Saturn'];
let luckyNumbers: number[];

//***Classes***
class Phone {}
let phone: Phone = new Phone();

//***Object Literals***
let product: { name: string; price: number } = {
  name: 'pen',
  price: 15,
};

//***Functions***
const printer: (content: string) => void = (content) => {
  console.log(content);
};

//* Functions that returns the 'any' type
const place = '{"lat": 45, "lon": -70}';
const newLocation = JSON.parse(place);
console.log(newLocation);
