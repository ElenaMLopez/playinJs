# Solución a la cuarta cuestión:

### Disclaimer:
Este ejercicio parece estar hecho ES6, con el que he trabajado bastante pero que se que aun debo estudiar más a fondo. 

Debido a la urgencia de entrega, no tengo tiempo de estudiarlo, por lo que he decidido hacerlo con un framework que conozco mejor y que es Vue. Estoy avanzada en su estudio ya, y empiezo a aplicarlo en diferentes proyectos. Por lo que encuanto acabe, me quedo el ejemplo para realizarlo en ES6 con algo más de tiempo, y utilizarlo como ejemplo para React, puesto que el tratamiento de la Reactividad de React, me parece muy adecuado para la situación que se plantea.

### Anotaciones:
El ejercicio tiene de entrada un fallo en la ejecución de webpack, no encuentra la orden. Para solucionar esto he agregado un script en el archivo package.JSON dejándolo de esta forma:

```JSON
{
  "name": "sun-media-test-js",
  "version": "1.0.0",
  "description": "",
  "main": "test.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --watch"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.0.0-beta.42",
    "@babel/preset-env": "^7.0.0-beta.42",
    "@babel/preset-es2015": "^7.0.0-beta.42",
    "babel-loader": "^8.0.0-beta.2",
    "webpack": "^4.18.0",
    "webpack-cli": "^2.0.13"
  }
}
``` 
En este caso, al ejecutar en consola el comando:
```text
$ npm run watch
```
Arranca el servidor y se mantiene pendiente de refrescar en caso de que se produzca algún cambio.

## Anotación 2:

Puesto que el ejercicio no es complicado en sí, en ved de utilizar un CLI, utilizaré el CDN directamente para aligerar el peso.



