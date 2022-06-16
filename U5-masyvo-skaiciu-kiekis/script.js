  
 window.onload=function(){

  let skaicius=0;
  let skaicius1=-55;
  let skaicius2=62
  
  


  

 
  const testinis = [ 35, 16, 55, 60, 77, 129, 22,3,5,44,8, -50 ,-55,-4]  ;
  let suma=masyvoDalis(testinis,skaicius);
  let suma1=masyvoDalis(testinis,skaicius1);
  let suma2=masyvoDalis(testinis,skaicius2);
  


  console.log (suma);
  console.log (suma1);
  console.log (suma2);
 

}
function masyvoDalis(a,skaicius){
     let suma=0;
    for (let i = 0; i < a.length; i++){
      if(arDaugiauUz(a[i],skaicius)){
      suma += 1;
       
    }    
  }
  return suma;
}
function arDaugiauUz(c,skaicius){
  return c > skaicius;

      


}
  

    
     
      
    

    
  
  
  
