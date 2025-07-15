//1
function maxnumber(params) {
    return Math.max.apply(Math, params);
}
var numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(maxnumber(numArray));
//2
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
//3
var str = "baseball";
var inverse = function (str) {
    return str.split('').reverse().join('');
};
console.log(inverse(str));
//4
var str2 = 'apple,orange,strawberry';
var comma = ",";
function separatedfruits(params, params2) {
    return params.split(params2);
}
console.log(separatedfruits(str2, comma));
