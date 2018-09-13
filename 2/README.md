# Test 2

El fragmento de código de nuestro fichero `test.js` nos devuelve un output no 
deseado. Queremos imprimir un valor incremental a cada segundo pero lo que 
nos devuelve el código es el mismo valor en cada iteración. 

1. Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría
 por consola el script?

```javascript
    5
    // Al segundo
    5
```

 ¿Cuál es el motivo?
 >El motivo es que en el momento en el que se entra en el bucle for, se empieza a ejecutar la función, pero no se para la ejecución del for, por la asincronía de JS, sino que continúa, y al segundo se imprime el valor final de i, que es 5.


2. Sabiendo que el output que buscamos es el que encuentras bajo estas líneas… 
¿Cómo solucionarías el fragmento de código para que el output sea el deseado?

```text
    > 0
    > 1
    > 2
    > 3
    > 4
```
```javascript
// En caso de buscar tan solo un print en consola del valor que va tomando i en el bucle:
for (var i = 0; i < 5; i++) {
    console.log(i)
}

// En caso de buscar un print en consola del valor de i, y que su incremento sea cada segundo:
for (var i = 0; i < 5; i++) {
setTimeout((x => () => console.log(x))(i), i * 1000)
}
```