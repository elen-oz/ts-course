const multiply = (x: number, y: number): number => {
  return x * y;
};

const divide = (x: number, y: number): number => {
  return x / y;
};

function sum(x: number, y: number): number {
  return x + y;
}

const subtract = function (x: number, y: number): number {
  return x - y;
};

const printString = (content: string): void => {
  console.log(content);
};

const throwError = (content: string): void => {
  throw new Error(content);
};
