let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = ()=>{
  return Math.floor(Math.random()*10);

};
const getAbsoluteDistance=(value1,value2) =>{
  return Math.abs(value1-value2);
}
//console.log(getAbsoluteDistance(2,6));
const compareGuesses =(userGuess,computerGuess,secretTarget)=>{
 /* if (Math.abs(secretTarget-userGuess)<=Math.abs(secretTarget-computerGuess)){
    return true;}
    */
let userDiff=getAbsoluteDistance(userGuess,secretTarget);
let computerDiff=getAbsoluteDistance(computerGuess,secretTarget);
if (userGuess>9 || userGuess< 0){
  alert('Please enter a number between 0 and 9.');
}
if (userDiff<=computerDiff){
  return true;
}  
else   {
    return false;
    } 
};

const updateScore=winner=>{
  if (winner==='human'){
     humanScore++;
  } else {
   computerScore++;
  }
};

const advanceRound=()=>{
  currentRoundNumber++;
};



