//1
function maxnumber(params :number[]):number {
 return Math.max(...params)
}

const numArray :number[] = [10,20,30,40,50,60,70,80,90,100];
console.log(maxnumber(numArray));


//2


for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
//3

const str: string = "baseball";

const inverse = (str: string): string => {
  return str.split('').reverse().join('');
};

console.log(inverse(str));

//4

const str2:string = 'apple,orange,strawberry';
const comma:string = ","

function separatedfruits(params:string ,params2:string ) :string[] {
  
 return params.split(params2)
}

console.log(separatedfruits(str2,comma));