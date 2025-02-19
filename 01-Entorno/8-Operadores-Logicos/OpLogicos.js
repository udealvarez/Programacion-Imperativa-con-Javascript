let nota1 = 7;
let nota2 = 9;
let nota3 = 5;


let resultado1;
let resultado2;
let resultado3;
let resultado4;
let resultado5;

// AND
resultado1 = (nota1 > 6) && (nota2 > 6);
resultado2 = (nota1 > 6) && (nota3 > 6);
console.log(resultado1);
console.log(resultado2);

// OR
resultado3 = (nota1 > 6) || (nota3 > 6);
resultado4 = (nota1 > 9) || (nota3 > 6);
console.log(resultado3);
console.log(resultado4);

// NOT
resultado5 = !(nota1 > 6); // condicion verdadera, al negarlo cambia su estado a FALSE
console.log(resultado5);
