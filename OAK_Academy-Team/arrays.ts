const favoriteShows: string[] = ['Friends', 'The Office', 'Breaking Bad'];
const dates = [new Date(), new Date()];

const meals: string[][] = [['breakfast'], ['lunch'], ['dinner']];

//* Help with inference
const office = favoriteShows[1]; // string
const lastKnown = favoriteShows.pop(); // string || undefined

//* Prevent incompatible values
favoriteShows.push(100);

//* Help with methods
favoriteShows.map((show: string) => {
  return show.concat();
});

//* Arrays have multiple types
const holidays: (Date | string)[] = [];
holidays.push('2022-01-01');
holidays.push(new Date());
