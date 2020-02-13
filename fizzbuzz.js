function fizzBuzz(i) {
    var res = "";

    if (i % 3 === 0) {
        res = res.concat("Fizz");
    }
    if (i % 5 === 0) {
        res = res.concat("Buzz");
    }
    if (!res) {
        res = i;
    }

    return res;
}

console.log(fizzBuzz(1)); // print 1
console.log(fizzBuzz(3)); // print Fizz
console.log(fizzBuzz(5)); // print Buzz
console.log(fizzBuzz(15)); // print FizzBuzz