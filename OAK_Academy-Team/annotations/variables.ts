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
const newLocation: { lat: number; lon: number } = JSON.parse(place);
console.log(newLocation); // { lat: 45, lon: -70 }

//* Initialize variable later
const forecast = ['sunny', 'rain', 'wind', 'cloudy'];
let isSunny: boolean;

for (let i = 0; i < forecast.length; i += 1) {
  if (forecast[i] === 'sunny') {
    isSunny = true;
  }
}

//* Type ca't be inferred correctly
let temperatures = [8, 5, -2];
let subzero: boolean | number = false;

for (let i = 0; i < temperatures[i]; i += 1) {
  if (temperatures[i] < 0) {
    subzero = temperatures[i];
  }
}
