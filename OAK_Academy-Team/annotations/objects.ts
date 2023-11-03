const client = {
  id: '1234',
  age: 25,
  BMI: 1.5,
  condition: {
    mass: 80,
    height: 185,
  },
  setBMI(mass: number, height: number): void {
    this.BMI = mass / (height * height);
  },
};

// lesson 29: Using Annotations with Objects in Type Script
const { id, age }: { id: string; age: number } = client;

const {
  condition: { mass, height },
}: { condition: { mass: number; height: number } } = client;
