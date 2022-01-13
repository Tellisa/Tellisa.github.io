const Calculate = {

  factorial(input){
   if(input===0){
      return 1;
    } 
   let product = 1;
    while (input >= 1){ 
      product*=input;
      input--;
    }
    return product;
  }
  
}


module.exports = Calculate;


