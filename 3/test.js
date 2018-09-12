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

// Alternativa:

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

// Alternativa 2:
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
    Promise.protitype.then = function (success){
			// Aquí definiría que debe hacer en caso de que tengamos ya el resultado y sea uno (Success mesaje)
		}
    Promise.prototype.catch = function(error) {
			// Aquí definiría que debe hacer en caso de que tengamos el resultado y no sea 1 (Fail messaje)
		}

    
}

