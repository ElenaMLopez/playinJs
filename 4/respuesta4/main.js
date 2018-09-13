Vue.component('datos', {
  template: '#datos-template',
  mounted(){
    axios.get('https://gist.githubusercontent.com/sunmedia-tv/60036547f107d748386d46f7afb498c0/raw/c6e8582246bfce8a93f4626bc952aedafdd624a7/test.json')
      .then((datos)=> {
        console.log(datos.data);

        const listaMensajes = datos.data.events.map((element) =>{
          return {
            segundo: element.second,
            tipo: element.type,
            mensaje: element.message
          }
        })
        /** Lista mensajes es un array de objetos:
         * 1. Utilizar un for each para recorrerlo y pintar en consola
         * lo que tiene 
         * 2. Imrpimir en consola con el formato:
         *    'At second 0: {type: "InitVideo", message: "init video 1"}'
         * 2. Hacerlo con un setTimeout() para que pintando según los 
         * segundos que sean segundos
         */
        listaMensajes.forEach(element => {
          /** element es cada uno de los elementos del array */

          let segundo = element.segundo;
          
          setTimeout(() => {
            console.log(`At second ${element.segundo}: {type: ${element.tipo}, message: "${element.mensaje}"}`);
          }, segundo * 1000 );
        });

        const listaDatos = {
          type: datos.data.types,
          mensajes: listaMensajes
        }        
      })
  },
  data(){
    return {
    }
  },
  computed: {

  }
});

Vue.component('dato', {

})

new Vue({
  el: 'main',
})