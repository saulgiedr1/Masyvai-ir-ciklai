window.onload=function(){

  let ieskomasSkaicius=159;
  let ieskomasSkaicius1=46;
  

  const testinis = [5, 11, 35, 46, 65, 60, 77, 129, 22]  ;
  let arYra=arYraMasyve(testinis, ieskomasSkaicius);
  let arYra1=arYraMasyve(testinis, ieskomasSkaicius1);
  
  let arYraAbu=arYraMasyveAbu(testinis,arYra,arYra1);
  

console.log(arYra);
console.log(arYra1);
console.log("Yra ?"+" " +arYraAbu);

}
function arYraMasyve(a,b,c){
  let arYra = false; 
  let arYra1 = false; 
  

  for (let i = 0; i < a.length; i++){
           
    if ( a[i] === b) {
      return true;
    } 
    if(a[i]===c)  
    return true;
  }
  return false;

}
function arYraMasyveAbu (a,b,c){
    let arYraAbu = false
  for (let i=0; i< a.length; i++){
    if(b && c) {
      return true;
    }
  }
  return false;     

}
