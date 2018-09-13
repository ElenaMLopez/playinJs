# Test 1

Para responder a este test encontrarás un archivo llamado `test.js` en esta 
misma carpeta donde hay un pequeño fragmento de código que deberás analizar 
y responder a las siguientes cuestiones. 

1. En el fragmento de código de nuestro archivo (`test.js`) podemos encontrar
 hasta 3 variables. ¿Podrías decirnos cuál sería el valor de todas ellas al 
 finalizar la ejecución del script?
```
rgb es un objeto con las siguietes propiedades:
{
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",, 
  white: "#FFFFFF", 
  black: "#000000"
  }

wb es un objeto con las siguientes propiedades:
{
  white: "#FFFFFF", 
black: "#000000"
}

Y por último colors es un objeto con las siguientes propiedades:
{
  red: "#FF0000", 
green: "#00FF00", 
blue: "#0000FF", 
white: "#FFFFFF", 
black: "#000000"
}
```
2. Modifica el código para que las variables `rgb` y `wb` mantengan sus valores 
iniciales y `colors` tenga los valores de ambas al finalizar la ejecución del 
script.

```javascrip
var rgb = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
};

var wb = {
    white: "#FFFFFF",
    black: "#000000"
};
var colors;

function colores(rgb,wb){
    colors = Object.assign(rgb,wb)
return colors
}
```
3. Además, tenemos un bug localizado en dispositivos con Internet Explorer… 
El código de nuestro script no funciona y necesitamos que se ejecute también 
en este navegador. ¿Sabrías identificar cuál es el problema? ¿Qué solución nos
 propones?

> El navegador internet explorer no soporta el método Object.assign(). Para poder solucionarlo sin cambiar el método, se puede utilizar un polifil, tenemos como ejemplo el que se propone en la página de [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill).

**PS**: No es estrictamente necesario tener Internet Explorer para poder identificar y/o resolver el bug. 

