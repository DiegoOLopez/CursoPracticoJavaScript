/**--------------CODIGO CUADRADO--------------**/
console.group("Cuadrado");
function perimetroCuadrado (lado){
    return lado * 4;
}

function areaCuadrada(lado){
    return lado * lado;
}
console.groupEnd("Cuadrado");

/**--------------CODIGO TRIANGULO--------------**/
console.group("Triangulo");

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd("Triangulo");
/**--------------CODIGO CIRCULO--------------**/
console.group("Circulos");

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}
//PI
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.groupEnd("Circulo");

/*******************----Interaccion HTML----*******************/

/**--------------HTML BOTONES CUADRADO--------------**/

function btnPerimetroCuadrado() {
    const ladoV = document.getElementById("ladoC");
    const lado = ladoV.value;

    const perimetro = perimetroCuadrado(lado);
    alert(perimetro);
}

function btnAreaCuadrado() {
    const ladoV = document.getElementById("ladoC");
    const lado = ladoV.value;

    const area = areaCuadrada(lado);
    alert(area);
}

/**--------------HTML BOTONES TRIANGULO--------------**/

function btnPerimetroTriangulo(){
    //Base//
    const baseV = document.getElementById("baseT");
    const base = baseV.value * 1;
    //Lado 1//
    const ladoV1 = document.getElementById("ladoT1");
    const lado1 = ladoV1.value * 1;
    //Lado 2//
    const ladoV2 = document.getElementById("ladoT2");
    const lado2 = ladoV2.value * 1;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function btnAreaTriangulo(){
    //Base
    const baseV = document.getElementById("baseT");
    const base = baseV.value;
    //Altura
    const alturaV = document.getElementById("alturaT");
    const altura = alturaV.value;

    const area = areaTriangulo(base, altura);
    alert(area);
}

/**--------------HTML BOTONES CIRCULO--------------**/

function btnPerimetroCirculo() {
    //Radio
    const radioV = document.getElementById("radioCi");
    const radio = radioV.value;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function btnAreaCirculo() {
    //Radio
    const radioV = document.getElementById("radioCi");
    const radio = radioV.value;

    const area = areaCirculo(radio);
    alert(area);
}