let input = "d##272l^%*^r51%^++o77Gw@@%%75o238l%%@l8%e2865*^%h";
let alpha = input.match(/[A-za-z]/g);
let output = alpha.reverse().join("");
console.log(output);