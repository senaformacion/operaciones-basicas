let suma = 0;

/// siclo for o para
for (var i = 5; i <= 100; i++) {
    if (i % 5 == 0 || i % 6 == 0) { //mod
        document.write('son multiplos de 5 o 6 : ' + i + '<br>');
        suma = suma + i;

    }

}
document.write('<br>');
document.write('<br> la suma total es : ' + suma);