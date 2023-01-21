// any
let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level;

// not ideal if we have thousands of this error
function render(document: any) {
  console.log(document);
}

// arrays
let numbers: number[] = [1, 2, 3];

// tuples
let user: [number, string] = [1, "Sanaz"];

// enums; a list of related constants
// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size {
  Samll = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);

// functions
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000);

// objects
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 0,
  name: "Sanaz",
  retire: (date: Date) => {
    console.log(date);
  },
};
