// function calculate(numOne: number, numTwo: number) {
//   return numOne + numTwo;
// }

// console.log(calculate(10, 20)); // 30
// console.log(calculate("10", "20")); // We Don't Need This To Work
// console.log(calculate(+true, +true)); // 2

// function printInfo(valueOne: number | string, valueTwo: number | string) {
//   return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
// }

// console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
// console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

// let arr: (number | boolean[] | (string | (string | number)[])[])[] = [
//   5,
//   [true],
//   ["yousef", ["yousef", 34]],
// ];

// function reportErrors(username, age: number) {
//   let rank = "Professor";
//   return `Username: ${username}`;
//   console.log("We Will Not Reach Here");
// }

// console.log(reportErrors("Elzero", 40));
// let nothing;
// let theName: string = "Elzero";
// function showMyDetails(a = "", b = "", c?) {
//   return `${a},${b},${c}`;
// }

// // Replace ???? With The Available Variables As Argument To Get The Result
// console.log(showMyDetails(theName)); // Elzero

// function showMsg(user?, age?, country?) {
//   return `${user}${age}${country}`;
// }

// console.log(showMsg());
// console.log(showMsg("Elzero"));
// console.log(showMsg("Elzero", 40));
// console.log(showMsg("Elzero", "40", "Egypt"));
// Write The Function Here

// Using The Function => Do Not Edit

// function printInConsole(...details: any[]): string {
//   let output = "";
//   for (let i of details) {
//     output += `the value is ${details} type is ${typeof i}\n`;
//   }
//   return output.trim();
// }

// console.log(printInConsole(1, 2, 3, 4, 5));
// console.log(printInConsole("A", "B", "C"));
// console.log(printInConsole(true, false, false, true, true));

// Output
// The Value Is 1 And Type Is number
// The Value Is 2 And Type Is number
// The Value Is 3 And Type Is number
// The Value Is 4 And Type Is number
// The Value Is 5 And Type Is number
// Done
// The Value Is A And Type Is string
// The Value Is B And Type Is string
// The Value Is C And Type Is string
// Done
// The Value Is true And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is true And Type Is boolean
// The Value Is true And Type Is boolean
// Done

// Write Your Code Here

// Do Not Edit Here
// type n = number;
// let myData: n;
// myData = 1000; // No Problem Here
// myData = +true; // No Problem Here

// type buttons = {
//   up: string;
//   left: string;
//   right: string;
//   down: string;
// };
// type last = buttons &{
//   x:boolean
// }
// function action(btn: last) {
//   console.log(`action for button up${btn.up}`);
//   console.log(`action for button left${btn.left}`);
//   console.log(`action for button right${btn.right}`);
//   console.log(`action for button down${btn.down}`);

// }
// action({ up: "jump", right: "go right", left: "go left", down: "go down" , x:false });

// function compare(num1: number, num2: number) {
//   if (num1 === num2) {
//     return 0;
//   } else if (num1 > num2) {
//     return 1;
//   } else {
//     return -1;
//   }
// }
// console.log(compare(1, 1));
// console.log(compare(2, 1));
// console.log(compare(1, 3));

// Write Your Code Here

// Do Not Edit Here
// type mix = number | boolean;
// let myInfo: mix;
// myInfo = 1000; // No Problem Here
// myInfo = true; // No Problem Here

// Write Your Code Here

// Do Not Edit Here

//   type Info = any

// function showInfo(data: Info) {

//   console.log(`The Name Is ${data.theName}`);
//   console.log(`The Age Is ${data.theAge}`);
// }
// console.log(showInfo({ theName: "Elzero", theAge: 40 }));
// type Full= Info
// function showFullInfo(data: Full) {
//   console.log(`The Name Is ${data.theName}`);
//   console.log(`The Age Is ${data.theAge}`);
//   console.log(`The Country Is ${data.country}`);
// }
// console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
// type you = Boolean | number;
// function yesOrNo(val: you) {
//   if (val === 30) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Do Not Edit Here
// console.log(yesOrNo("100")); // Error
// console.log(yesOrNo(30)); // True
// console.log(yesOrNo(8)); // False

// type custom = number | string[]
// function isHeOld(age:custom) : custom | number {
//   return age > 40;
// }

// // Do Not Edit Here
// console.log(isHeOld("100")); // Error
// console.log(isHeOld(45)); // "Yes"
// console.log(isHeOld(30)); // "No"

// enum child {
//   Five = 25,
//   seven = 15,
//   ten = 10,
// }

// const kids = 10;
// const easy = 8;
// const meduim = 5;
// const hard = 3;
// enum level {
//   kids = child.seven,
//   easy = child.Five,
//   meduim = child.ten,
//   hard = 5,
// }

// let lvl: string = "easy";
// let lvl2: string = "easy";
// let lvl3: string = "easy";
// let lvl4: string = "easy";

// if (lvl === "kids") {
//   console.log(`the level is ${lvl} and number is ${level.kids}`);
// } else if (lvl3 === "meduim") {
//   console.log(`the level is ${lvl3} and number is ${level.meduim}`);
// } else if (lvl2 === "easy") {
//   console.log(`the level is ${lvl2} and number is ${level.easy}`);
// } else if (lvl4 === "hard") {
//   console.log(`the level is ${lvl4} and number is ${level.hard}`);
// }
// type custom = string;

// function isHeOld(age: number): custom {
//   if (age > 40) {
//     return "yes";
//   } else {
//     return "No";
//   }
// }

// Do Not Edit Here
// console.log(isHeOld("100")); // Error
// console.log(isHeOld(45)); // "Yes"
// console.log(isHeOld(30)); // "No"

// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
// let post: readonly [number, string, boolean] = [100, "Title", true]; // Good

// const [id, title, state] = post;

// // post.push("Elzero"); // Error => Cant Add

// // Create Destructuring Here

// // Do Not Edit Here
// console.log(id); // 100
// console.log(title); // "Title"
// console.log(state); // true
// Create Enums + Function Here

// Output
// function calc(num: number): number {
//   return num;
// }

// enum Game {
//   easy = 100,
//   meduim = easy - 20,
//   hard = meduim - easy / 2,
//   Insane = calc(50) - hard,
// }

// console.log(Game.easy); // 100
// console.log(Game.meduim); // 80
// console.log(Game.hard); // 30
// console.log(Game.Insane); // 20

// const user: {
//   username: string;
//   age: number;
//   website?: string;
//   skills: {
//     frontEnd: string[];
//     backEnd: (string | number)[];
//   };
// } = {
//   username: "Elzero",
//   age: 40,
//   website: "Elzero.org",
//   skills: {
//     frontEnd: ["HTML", "CSS", "JS"],
//     backEnd: ["PHP", "Python"],
//   },
// };

// We Need To Remove Error From This Edits
// user.username = "Osama";
// user.age = 40;
// user.skills.backEnd.push(100);
// let myimg = document.getElementById("hello") as HTMLImageElement;
// console.log(myimg.src);

// let data: any = "1000";
// console.log((data as string).repeat(2));
// type A = {
//   one: number;
//   two: string;
//   three: boolean;
// };
// type B = A & {
//   four: number;
// };
// type C = A &
//   B & {
//     five: boolean;
//   };

// type mix = C;
// function callfun(btns: mix) {
//   console.log(`hello ${btns.one}`);
//   console.log(`hello ${btns.two}`);
//   console.log(`hello ${btns.three}`);
//   console.log(`hello ${btns.four}`);
//   console.log(`hello ${btns.five}`);
// }
// callfun({ one: 50, two: "yousef", three: true, four: 20, five: true });

// let myopject: {
//   user: string;
//   age: number;
//   salary: number;
//   active: boolean;
//   skills:{
//     one:string
//     two:number
//     three:boolean
//   }
// } = {
//    user: "yousef",
//   age: 22,
//   salary: 5000,
//   active: true,
//   skills:{
//     one:'js',
//     two:5,
//     three:true
//   }
// };

// myopject.user = "gathem";
// myopject.age = 25;
// myopject.salary = 6000;
// myopject.active = false;

// console.log(myopject.user);
// console.log(myopject.age);
// console.log(myopject.salary);
// console.log(myopject.active);
// interface user {
//   id: number;
//   name: string;
//   country: string;
// }
// let user: user = {
//   id: 100,
//   name: "yousef",
//   country: "UK",
// };
// console.log(user);
// function getdata(data: user) {
//   console.log(`id is ${data.id}`);
//   console.log(`name is ${data.name}`);
//   console.log(`country is ${data.country}`);
// }
// getdata({ id: 5, name: "yousef", country: "Russia" });
// interface user {
//   id: number;
//   username: string;
//   active: boolean;
//   sayhello(): string;
//   saywelcome(): string;
//   hellodouble(num: number): number;
// }

// let user: user = {
//   id: 10,
//   username: "yousef",
//   active: true,
//   sayhello() {
//     return `hello ${this.id}`;
//   },
//   saywelcome() {
//     return `hello ${this.username}`;
//   },
//   hellodouble(n) {
//     return n + 5;
//   },
// };
// console.log(user.id);
// console.log(user.active);
// console.log(user.username);
// console.log(user.sayhello());
// console.log(user.saywelcome());
// console.log(user.hellodouble(10));
// Edit The Interface To Fix The Problems
// interface Member {
//   id: number | string;
//   username: string;
//   country?: string;
//   state: boolean;
//   getName(): string;
// }

// // Do Not Edit The Code Below
// let user: Member = {
//   // Property 'country' is missing in type
//   id: 100,
//   username: "Elzero",
//   state: true,
//   getName() {
//     // 'getName' does not exist in type 'Member'
//     return this.username;
//   },
// };

// user.id = 200;
// user.id = "200"; // Type 'string' is not assignable to type 'number'
// user.state = false; // Cannot assign to 'state' because it is a read-only property
// Create Interface Here

// Do Not Edit The Code Below

// interface Client {
//   id: number;
//   username: string;
//   active: boolean;
//   discount: number;
//   getPrice(price: number): number;
// }

// let client: Client = {
//   id: 100,
//   username: "Elzero",
//   active: true,
//   discount: 10,
//   getPrice(price: number) {
//     return price - this.discount;
//   },
// };

// console.log(`Client Id Is ${client.id}`);
// console.log(`Client Name Is ${client.username}`);
// console.log(`Client Has Dicount ${client.discount}`);
// console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
// Do Not Edit The Code Below
// interface Man {
//   title: string;
//   weight: number;
//   age: number;
// }

// interface Bird {
//   canFly: boolean;
// }
// interface  Superman extends Man ,Bird{
//   bodyType: string;
//   origin: string;
// };
// let creature: Superman = {
//   title: "Superman",
//   weight: 100,
//   age: 500,
//   canFly: true,
//   bodyType: "Iron",
//   origin: "Krypton",
// };
// console.log(creature);
// interface setting {
//   theme: boolean;
//   font: string;
// }
// interface setting {
//   sidebar: boolean;
// }
// let usetsetting: setting = {
//   theme: true,
//   font: "open sans",
//   sidebar: true,
// };
interface user {
  name: string;
  id: number;
  active: boolean;
}
interface moderator extends user {
  role: string | number;
}
interface admin extends moderator {
  protect: boolean;
}
let user: admin = {
  id: 2,
  name: "yosuef",
  active: true,
  role: "false",
  protect: true,
};
