const n = 4

function fizzBuzz(entrada) {
  if ((entrada % 3) === 0 || (entrada % 5) === 0) {
        if ((entrada % 3) === 0 && (entrada % 5) === 0) {
            return "FizzBuzz";
        }
        else if (entrada % 3 === 0 && (entrada % 5) != 0) {
            return "Fizz";
        }
        else if ((entrada % 5) === 0 && (entrada % 3) != 0) {
            return "Buzz";
        }
      }
  else {
    const num = entrada
    return num;
  }
}

console.log(fizzBuzz(n))