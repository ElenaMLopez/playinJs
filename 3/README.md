# Test 3

En este caso, tenemos un código usando el objeto `Promise` (Promesa). Las *promises* 
(promesas) nos permiten manejar situaciones asíncronas en nuestras ejecuciones, 
pero tenemos un pequeño problema… No es una solución totalmente cross-browser. 
Sabemos que no funciona en Internet Explorer así que nos gustaría saber cómo 
modificarías nuestro código (`test.js`) para que funcione correctamente.


 > En el código inicial, vemos una gestión de asincronía utilizando la API de promise.
  El problema es que en navegadores más antiguos como IE5 esta API no es soportada.
  Para solventar este problema se me han ocurrido 3 posibles soluciones.
  El código original es el siguiente:
```javascript
let promise = new Promise((resolve, reject) => {
		setTimeout(function () {
				if (Math.round(Math.random()) === 1) {
						resolve("Success!");
				} else {
						reject("Fail!");
				}
		}, 1000);
	});

	promise
			.then((successMessage) => {
					console.log("Yes! " + successMessage);
			})
			.catch((failMessage) => {
					console.log("No! " + failMessage);
			});

```

### Alternativa 1:
```javascript
var resultado = setTimeout(function(){
		resultado = Math.round(Math.random());
 
}, 1000); // Esto hace que el resultado llegue después de un segundo.

/* La función cb se encarga de recoger el resultado y gestionar las 
diferentes opciones que puede tener */

function cb(resultado) {
	if (resultado === undefined) {
		console.log('loadin...');
			setTimeout(function(){
				function getResultado(){
					resultado = Math.round(Math.random());
					cb(resultado);
				}
					getResultado();
			}, 1100);
	
	} else if (resultado === 1) {
			console.log('Success! Yes!')
	} else {
			console.log('Fail! No!')
	}
}

function myPromise(resultado, cb){
	cb();
}
myPromise(resultado, cb);
```
### Alternativa 2: 
 
 > En este caso se puede como opción realizar un polifill.

> Lo haría de esta forma.
 
```javascript
/** En esta sección se comprueba si el navegador tiene soporte para promesas, comenzando por el 
 * comenzando por el supuesto de que sí tiene, matenemos el código original:
 * @example
 */
if (window.Promise) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            if (Math.round(Math.random()) === 1) {
                resolve("Success!");
            } else {
                reject("Fail!");
            }
        }, 1000);
    });
    
    promise
        .then((successMessage) => {
            console.log("Yes! " + successMessage);
        })
        .catch((failMessage) => {
            console.log("No! " + failMessage);
        });
} else { 
	/** En este punto comienza el polifill, básicamente utilizamos la Api de promise y la hacemos 
	 * comprensible para el navegador que no la soporta mediante el prototipo de Promise.
	 */
    Promise.protitype.then = function (success){
			// Aquí definiría que debe hacer en caso de que tengamos ya el resultado y sea uno (Success mesaje)
		}
    Promise.prototype.catch = function(error) {
			// Aquí definiría que debe hacer en caso de que tengamos el resultado y no sea 1 (Fail messaje)
		}    
}
```
### Alternativa 3:
 
 >Por último, se puede utilizar alguna librería que nos provea de polyfills para IE5 y navegadores
 antiguos como por ejemplo la de Taylor Hakes :https://github.com/taylorhakes/promise-polyfill/blob/master/src/index.js,
 > Como siempre, la decisión de que opción tomar, depende de las necesidades del proyecto.
 
