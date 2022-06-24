window.onload=function(){

  let ieskomasSkaicius=11;
  

  const testinis = [5, 11, 35, 46, 65, 60, 77, 129, 22]  ;
  let arYra=arYraMasyve(testinis, ieskomasSkaicius);

console.log(arYra);

}
function arYraMasyve(a,b){

  for (let i = 0; i < a.length; i++){
           
  if ( a[i] === b){
    return true;
  }   
  else{
    return false;
  }
  
  }       

}
