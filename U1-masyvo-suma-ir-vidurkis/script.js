window.onload=function(){

  const testinis = [10, 35, 16, 55, 60, 77, 129, 22]  ;
  let suma=masyvoSuma(testinis);
  let vidurkis=masyvoVidurkis(testinis);


  console.log (suma);
  console.log(vidurkis);

}
function masyvoSuma(a){
    let suma=0;
    for (let i = 0; i < a.length; i++){
        suma += a[i];
    }
    return suma;

}
function masyvoVidurkis(b){
    let vidurkis = 0;
    for (let i = 0; i < b.length; i++){
        vidurkis += b[i]/b.length;
    }
    return vidurkis;

}