// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];
const neigh=[7, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

const newBatch=[valid1, valid2,invalid1,invalid2,neigh];
//different credit card numbers
const diffBatch=[[4,5,3,2,8,8,2,0,5,1,3,6,8,0,3,3],[5,4,5,2,6,1,5,9,7,8,3,0,3,7,4,8],[3,4,6,7,9,1,2,1,1,1,1,8,8,3,8],[6,0,1,1,5,0,5,8,1,9,3,5,1,4,0,6]];
// Add your functions below:
//function validateCred(array)
  const validateCred= array=>{
    let newArray=array.slice().reverse();
    let total=0;
    for (let i=0;i<newArray.length;i++){
      if (i%2 != 0 && newArray[i]>4){
        newArray[i]=(newArray[i]*2)-9;
        }
        else if (i%2 != 0 && newArray[i]<= 4){
          newArray[i]*=2;
        }
      //console.log(newArray[i]);
      total+=newArray[i];
        
    }
    
    //console.log(total);
     if (total%10===0){
    return true;
  }
  else{
    return false;
  }
  
  };
  //console.log(validateCred(invalid2));

 function findInvalidCards(nestArray){
   let nestInvalid=[];
   for (let element of nestArray){
     if (validateCred(element)===false){
       nestInvalid.push(element)
       //console.log(element);
     }
   }
   return nestInvalid;
   
 };
 
 //console.log(findInvalidCards(newBatch));

function idInvalidCardCompanies(invalidArray){
  const acceptedCompanies=[3,4,5,6];
  let cardCompanies=[];
  //console.log(invalidArray);
   for (const element of invalidArray){
    if (acceptedCompanies.includes(element[0])===false){
      cardCompanies.push( 'Company not found');
        
     } else if (element[0]===3){
       cardCompanies.push('Amex');
       
     }else if (element[0]===4){
       cardCompanies.push('Visa');
       
     
     }else if (element[0]===5){
       cardCompanies.push('Mastercard');
       
     }else if (element[0]===6){
       cardCompanies.push('Discover'); 
     }
     
   }
  const companies= new  Set(cardCompanies);
  return Array.from(companies) ;      
     

};
//console.log( idInvalidCardCompanies(batch));
console.log(validateCred(diffBatch[3]));
console.log(findInvalidCards(diffBatch));


