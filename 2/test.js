/** El código dado de ejemplo es el siguiente
 * @example
 * for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
  }*/
  /**En este caso, el resultado devuelto es 5 según se ejecute, y al cabo de un segundo 
   * devolverá de nuevo 5 puesto que lo que está haciendo ese script, es un bucle for convencional.
   * En el momento del arranque ejecuta el bucle, y cuando llega al método setTimeout, empieza 
   * ejecutarlo. La asincronía de JS no para la ejecución del bucle en este punto, sino que continúa
   * con ella. Por ello, a los 5 segundos devolverá el valor de la variable i, que en ese momento ya
   * es 5.
   */

  
  
  /** En caso de buscar un print en consola del valor de i, y que su incremento sea cada 
   * segundo, se plantea esta solución:
   * 1. Declaramos el bucle
   * 2. Se realiza un setTimeout al que se le pasa una función de parámetro x, que a su vez
   * encierra una función anónima que imprime en consola el valor de x. El scope de esta función 
   * aísla el valor de x a su entorno de ejecución, que según el time asignado en el setTimeout, 
   * es de un segundo. La aclaración de esta parte viene después.
   * 3. a esta función se la ejecuta pasándo i como parámetro. 
   * 4. Por último, en el timer del setTimeout, se multiplica el valor del tiempo (1000 ms), por
   * el valor que vaya tomando i, de forma que lanzará resultados según i se incremente.
  */
  for (var i = 0; i < 5; i++) {
    setTimeout((x => () => console.log(x))(i), i * 1000)
    }
/** Equivalente en VanillaJs:
 * Para navegadores que no soporten ES6.
 */
    for (var i = 0; i < 5; i++) {
  setTimeout(function (x) {
    return function () {
      return console.log(x);
    };
  }(i), (i + 1) * 1000);
}