/*
Calculadora de Índice de Masa Corporal (IMC):
Crea una función que calcule el IMC utilizando los parámetros de peso y altura. 
Usa operadores aritméticos y condicionales para evaluar diferentes rangos de IMC (bajo peso, peso normal, sobrepeso, etc.).
*/

function calcularIMC(peso, altura){

    let imc = peso / (altura * altura);

    if (imc < 18.8) {
        console.log("Bajo peso");
    }else if (imc < 24.9) {
        console.log("Peso normal");
    }else if (imc < 2.9) {
        console.log("Sobrepeso");
    }else{
        console.log("Obecidad");
    }
}

calcularIMC(70, 1.75);
calcularIMC(120, 1.65);
calcularIMC(99, 1.8);