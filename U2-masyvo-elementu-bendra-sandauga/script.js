window.onload=function(){

  const testinis = [11, 35, 46, 65, 60, 77, 129, 22]  ;
  let sandauga=masyvoElementuSandauga(testinis);

  console.log(sandauga);

}
function masyvoElementuSandauga(a){
    let sandauga=1;
    for(let i=0; i < a.length; i++ ){

       sandauga *= a[i];
    }
    return sandauga;
}
