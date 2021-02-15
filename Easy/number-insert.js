let n = 268;

let n_2 = 670;

let n_3 = 0;

let n_4 = -999;

function solution(N) {
  let number = N.toString().split("");

  for (let i = 0; i < number.length; i++) {
    if (number[i] === 5 || number[i] < 5) {
      number.splice(i, 0, 5);

      return number.join("");
    } else if (number.join("") < 0) {
      if (number[i] === 5 || number[i] > 5) {
        number.splice(i, 0, 5);

        return number.join("");
      }
    }
  }
}

console.log(solution(n_4));
