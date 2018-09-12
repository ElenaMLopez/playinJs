for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
}
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
  }
  
  
  // En caso de buscar un print en consola del valor de i, y que su incremento sea cada segundo:
  
  for (var i = 0; i < 5; i++) {
    setTimeout((x => () => console.log(x))(i), i * 1000)
    }