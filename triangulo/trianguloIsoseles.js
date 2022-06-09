/***********----------DECLARACION DE FUNCIONES----------**********/
function verificacionIsoseles(lado1,lado2,lado3){
    if (lado1 == lado2 && lado3 !== lado1 || lado2 == lado3 && lado1 !== lado2 || lado3 == lado1 && lado2 !== lado3) {
        return "Es un triangulo Isoseles";
    } else {
        return "No es un triangulo Isoseles"
    }
}

function calculoAltura(lado1, lado2, lado3) {
    var semiP;
    var area;
    var altura;
    semiP = (lado1 + lado2 + lado3)/2;
    area = Math.sqrt(semiP*(semiP-lado1)*(semiP-lado2)*(semiP-lado3));
    altura = (2*area)/lado1;
    return altura;

}

/***********----------USO DE VARIABLES HTML----------**********/

function btnVerificacion(){
    const ladoV1 = document.getElementById("ladoT1");
    const lado1 = ladoV1.value*1;
    const ladoV2 = document.getElementById("ladoT2");
    const lado2 = ladoV2.value*1;
    const ladoV3 = document.getElementById("ladoT3");
    const lado3 = ladoV3.value*1;

    const validacion = verificacionIsoseles(lado1, lado2, lado3);

    alert(validacion);
}

function btnCalculo(){
    const ladoV1 = document.getElementById("ladoT1");
    const lado1 = ladoV1.value*1;
    const ladoV2 = document.getElementById("ladoT2");
    const lado2 = ladoV2.value*1;
    const ladoV3 = document.getElementById("ladoT3");
    const lado3 = ladoV3.value*1;

    const alturaF = calculoAltura(lado1,lado2,lado3);

    alert(alturaF);
}