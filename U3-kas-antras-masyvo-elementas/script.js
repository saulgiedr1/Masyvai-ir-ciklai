window.onload=function(){

  const testinis = [11, 35, 46, 65, 60, 77, 129, 22, 50,23,89,58,33,61]  ;
  const kasAntras = isvestiKasAntra();
  masyvoKasAntras(kasAntras);

  

}
function masyvoKasAntras(a) {       
    for (let i=0; i < a.length; i++ ){
      console.log(a[i]);
      }              
      }   
function isvestiKasAntra()  {
  const a = [];
  for (let i=0; i < a.length; i++){
    if (lyginisIndeksas([i])) {
      a.push(i);
    }
  }
  return a;
}     
    
   
   function lyginisIndeksas(x) {
    return x % 2 === 0;

   }

