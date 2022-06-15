window.onload=function(){
    let pirmas =509;
    let antras =603;
    const nelyginiai= nelyginiaiNuoiki(pirmas, antras);
    gaunamasMasyvas(nelyginiai);
    let  suma = masyvoSuma(nelyginiai);
    console.log(suma)
      
}

function gaunamasMasyvas(ma) {
    for (let i = 0; i < ma.length; i++) {
        console.log(ma[i]);
    }
}

function nelyginiaiNuoiki(a,b){
    
    const ma = [];
    for( let i=a; i<=b; i += 2){
        ma.push(i);
    }
    return ma;
}
function masyvoSuma(a){
    let suma=0;
    for (let i = 0; i < a.length; i++){
        suma += a[i];
    }
    return suma;
}