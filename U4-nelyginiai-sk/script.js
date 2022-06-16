window.onload=function(){
    let pirmas =1;
    let antras =20;
    let pirmas1=100;
    let antras1=204;
    
    const nelyginiai= nelyginiaiNuoiki(pirmas, antras);
    const nelyginiai1= nelyginiaiNuoiki(pirmas1, antras1);
    gaunamasMasyvas(nelyginiai);
    gaunamasMasyvas(nelyginiai1);
    let  suma = masyvoSuma(nelyginiai);
    let  suma1 = masyvoSuma(nelyginiai1);
    console.log(suma)
    console.log(suma1)
      
}

function gaunamasMasyvas(ma) {
    for (let i = 0; i < ma.length; i++) {
        console.log(ma[i]);
    }
}

function nelyginiaiNuoiki(a,b){
    
    const ma = [];
    for( let i=a; i<=b; i ++){
         if (arTainelyginis(i) ){
        ma.push(i); 
      
    }
}

    return ma;
}
function arTainelyginis(z) {
    return z % 2 !== 0;
}
function masyvoSuma(a){
    let suma=0;
    for (let i = 0; i < a.length; i++){
        suma += a[i];
    }
    return suma;
}