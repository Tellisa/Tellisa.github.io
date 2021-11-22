let input='turpentine and turtles';
const vowels=['a','e','i','o','u'];
let resultArray=[];
for (let inputCounter=0;inputCounter<input.length;inputCounter++){
  //console.log('i is '+i);
  for (let vowelCounter=0;vowelCounter<vowels.length;vowelCounter++){
    //console.log('j is '+j);
    if (input[inputCounter]===vowels[vowelCounter]){
      if (input[inputCounter]==='e'){
       resultArray.push('ee');
       }
        else if(input[inputCounter]==='u'){
         resultArray.push('uu');
       }
       else{ 
         resultArray.push(input[inputCounter]);
       }
    }
  }
}
  console.log(resultArray.join('').toUpperCase());
