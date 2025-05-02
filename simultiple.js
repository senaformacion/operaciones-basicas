
//datos o variablesd de entrada
let numero1 = 0;
let numero2 = 0;
let numero3 = 0;
//variables o dato de salida
let respuesta = 0;
//ingresa los numeros por pantalla
numero1 = parseInt(prompt('ingrese el primer numero: '));
numero2 = parseInt(prompt('ingrese el segundo numero: '));
numero3 = parseInt(prompt('ingrese el tercer numero: '));

// estructura del if o si
if (numero1 >= 10 && numero1 <= 20) {
    respuesta = numero2 + numero3;
    document.write('el primer numero esta entre 10 y 20 entonces la suma es : ' + respuesta + '<br>');
} 
//////////resta
else
if (numero1 >= 21 && numero1 <= 30) {
    respuesta = numero2 , numero3;
    document.write('el primer numero esta entre 21 y 30 entonces la resta es : ' + respuesta);
}
//////////mutilicacion
else
if (numero1 >= 31 && numero1 <= 40) {
    respuesta = numero2 * numero3;
    document.write('el primer numero esta entre 31y 40 entonces la multiplicacion es : ' + respuesta + '<br>');
}

///////division
else
if (numero1 > 40 && numero3 != 0) {
    respuesta = numero2 / numero3;
    document.write('el primer numero es mayor de  40 la division es : ' + respuesta + '<br>');
}
else
    if (numero3 == 0) {
        document.write('la division por 0 no se puede realizar <br> ');
    }

///////// si es menor
else
if (numero1 < 10) {

    document.write('ingreso un numero no valido <br>');
}