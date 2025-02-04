/*
Calculadora de Índice de Masa Corporal (IMC):
Crea una función que calcule el IMC utilizando los parámetros de peso y altura. 
Usa operadores aritméticos y condicionales para evaluar diferentes rangos de IMC (bajo peso, peso normal, sobrepeso, etc.).
*/

function calculadoraIMC(peso, altura){
    let IMC = peso / (altura * altura);
    console.log("El IMC calculado es: " + IMC);

    if (IMC >= 40) {
        console.log("Obesidad muy severa");
    }else if (IMC >= 35) {
        console.log("Obesidad severa");
    }else if (IMC >= 30) {
        console.log("Obecidad moderada");
    }else if (IMC >= 25 ) {
        console.log("Sobrepeso");
    }else if (IMC >= 18.5) {
        console.log("Peso Saludable");
    }else if (IMC >= 16) {
        console.log("Delgadez");
    }else if (IMC >= 15) {
        console.log("Delgadez severa");
    }else if (IMC > 0) {
        console.log("Delgadez muy severa");
    }else{
        console.log("Fuera de rango");
    }
}

calculadoraIMC(98, 1.8);
calculadoraIMC(108, 1.67);
calculadoraIMC(88, 1.85);
calculadoraIMC(65, 1.5);
calculadoraIMC(94, 1.62);