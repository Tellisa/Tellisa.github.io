///get user input
const getUserChoice = (userInput)=>{
  userInput= userInput.toLowerCase();
  if (userInput==='rock'||userInput==='paper'||userInput==='scissors'||userInput==='bomb'){
    return userInput;
  } else{
    console.log('Please enter rock, paper ,scissors or bomb.');
  }
} ;
//get computer input
const getComputerChoice=  ()=>{
 const number= Math.floor(Math.random()*3);
 switch (number){
   case 0:
    return 'rock';
    break;
   case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      console.log('Error!');
      break;
 }
};
//determine the winner
const determineWinner=(userChoice,computerChoice)=>{
   if(userChoice==='bomb'){
    return 'Way to go User!! Flawless win.'
  }
  if (userChoice===computerChoice){
    return "The game is a tie!!!";
  } 
  if(userChoice==='rock'){
    if(computerChoice==='paper'){
      return 'Congratulations Computer! Great win.';
    }else{
      return 'Congratulations User! You won.';
    } 
  }
  if (userChoice==='paper'){
    if(computerChoice==='scissors'){
      return 'Congratulations Computer! Great win.';
    }else{
      return 'Congratulations User! You won.';
      
    }
  }
  if (userChoice==='scissors'){
    if(computerChoice==='rock'){
      return 'Congratulations Computer! Great win.';
    } else {
     return' Congratulations User! You won.';

    }
  }
 
};
//play game
const playGame= ()=>{
 const userChoice=getUserChoice('rock');
 const computerChoice=getComputerChoice();
 console.log('You chose: '+ userChoice);
 console.log('The computer chose: '+computerChoice);
 console.log( determineWinner(userChoice,computerChoice));
 

};
playGame();



 