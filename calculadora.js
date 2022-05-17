var cantidad="";
var sumatoria=0;
var contadorMulti=0;
var multiplicar=false;
var sumar=false;
var restar=false;
var dividir=false;
var porcentajer=false;
var parentesise=false;
var raiz=false;
var potenciar=false;

function mostrar_numeros(numero){
     document.getElementById("display").value=cantidad+numero;
     cantidad=document.getElementById("display").value;
}

function suma(){
    sumatoria=sumatoria + parseInt(cantidad);
    document.getElementById("display").value=sumatoria;
    cantidad="";
    sumar=true;
}

function resta(){
    if(contadorMulti == 0){
        sumatoria = sumatoria + parseInt(cantidad);
    }else{
        sumatoria = document.getElementById("display").value;
    }
    document.getElementById("display").value=sumatoria;
    cantidad="";
    restar=true;
    contadorMulti++;
}

function multiplicacion() {
    if(contadorMulti == 0){
        sumatoria = sumatoria + parseInt(cantidad);
    }else{
        sumatoria = document.getElementById("display").value;
    }
    document.getElementById("display").value=sumatoria;
    cantidad="";
    multiplicar=true; 
    contadorMulti++;
}

function division() {
    if(contadorMulti == 0){
        sumatoria = sumatoria + parseInt(cantidad);
    }else{
        sumatoria = document.getElementById("display").value;
    }
    document.getElementById("display").value=sumatoria;
    cantidad="";
    dividir=true;
    contadorMulti++;
}

function borrar() {
    sumatoria=0;
    document.getElementById("display").value="";
    cantidad="";
}

function porcentaje() {
    sumatoria = parseInt(cantidad) /(100);
    document.getElementById("display").value = sumatoria;
    cantidad="";
    porcentajer=true;
}

function raizcuadrada(){
    raiz=Math.sqrt(cantidad);
    document.getElementById("display").value=raiz;
    cantidad="";
}

function potencia() {
    sumatoria = parseInt(cantidad) * cantidad;
    document.getElementById("display").value = sumatoria;
    cantidad="";
    potenciar=true;
}

function igual() {
    if (sumar) {
        document.getElementById("display").value = sumatoria + parseInt(cantidad);
    } if (restar) {
        document.getElementById("display").value = sumatoria - parseInt(cantidad);
    } if (multiplicar) {
        document.getElementById("display").value = sumatoria * parseInt(cantidad);
    } if (dividir) {
        document.getElementById("display").value = sumatoria / parseInt(cantidad);
    }  if (porcentajer) {
        document.getElementById("display").value = sumatoria % parseInt(cantidad);
    }
}