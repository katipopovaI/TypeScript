// const str: string = "hello";
// console.log(str);

//boolean type
const isFetching: boolean = true;
const isLoading: boolean = false;

//number
const int: number = 42;

//float
const float: number = 4.2;

//string
const message: string = "Hello";

//array
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];
const words: string[] = ["hello", "TS"];

//tuple
const contact: [string, number] = ["ved", 1234];

//any
let variable: any = 42;
//....
variable = "new String";

//function
//void-ничего не вернет
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName("hi");

//never
//error
//постоянно делает что-либо
function throwError(message: string): never {
  throw new Error(message);
}

// function infinite():never{
//     while(true){

//     }
// }

///type-свои типы
type Login = string;
const login: Login = "admin";

type ID = string | number;
const id1: ID = 1234;
const id2: ID = "a12";

//null undefined
type SomeType = string | null | undefined;
