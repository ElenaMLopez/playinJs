/** Código original:
 * @example
 */
var rgb = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
};

var wb = {
    white: "#FFFFFF",
    black: "#000000"
};

var colors = Object.assign(rgb, wb);
/** Lo que este código devolvería serían tres objetos:
 * rgb es un objeto con las siguietes propiedades:
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

 * El método Object.assign() al que se le pasan dos argumentos, lo que hace es crear un nuevo
 * objeto, que se compone de las propiedades del primer objeto pasado como parámetro, más las
 * propiedades del segundo objeto
 */

 // Segunda cuestión:
/** Alternativa 2
 * Respuesta a la segunda pregunta del test. 
 * Se propone el siguiente código
 * @example
 */
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
};

// Tercera cuestión:
/** > El navegador internet explorer no soporta el método Object.assign(). 
 * Para poder solucionarlo sin cambiar el método, se puede utilizar un polifil, tenemos 
 * como ejemplo el que se propone en la página de [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill).
 */