//Primitives

let age: number = 12;

let userName: string = "Hossein";

let isInstructor: boolean = true;

let hobbies: string[] = ["Movies", "Reading", "Watch TV"];

let newPerson = { name: "Hossein", age: 12, isEmployee: true }; //newPerson:any

let person: { name: string; age: number } = { name: "Hossein", age: 12 }; //person:{set type}

let people: { name: string; age: number }[];

//Type Inference

let course = "React";

//course=12

//Union Type:

let newCourse: string | string[] | number = "React";

newCourse = 12;

//Aliases:

type Person = { name: string; age: number };

let aliasesPerson: Person;

let aliasesPersonArray: Person[];

//Function & type

function add(a: number, b: number): number | string {
  return a + b;
}

function printOutut(value: any) {
  console.log(value);
}

//Generics

function insertAtBeginnig<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginnig(demoArray, -1);
const stringArray = insertAtBeginnig(['1','2','3'],'-1')

//updatedArray[0].split('')
stringArray[0].split('')