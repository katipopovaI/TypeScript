interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; //'name'|'age'

let key: PersonKeys = "name";
key = "age";

//key='job'//error
///////////////////////
type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};
/////Exclude-поля которые исключаем
type UserKeysNoMeta1 = Exclude<keyof User, "_id" | "createdAt">; ///name|email
////Pick
type UserKeysNoMeta2 = Pick<User, "name" | "email">; //поля которые забираем

let u1: UserKeysNoMeta1 = "name";
// u1='_id'//error
