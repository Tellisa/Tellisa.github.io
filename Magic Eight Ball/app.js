let userName='';
userName ? console.log(`Hello, ${userName}!`): console.log('Hello!');
let userQuestion ='Will I grow taller?';
console.log(`The user asked: ${userQuestion}`);
let randomNumber=Math.floor(Math.random()*8);
let eightBall='';
//control flow
/*
switch (randomNumber){
  case 0:
    eightBall='It is certain';
  break;
  case 1:
    eightBall='It is decidedly so';
  break;
  case 2:
    eightBall='Reply hazy try again';
  break;
  case 3:
    eightBall='Cannot predict now';
  break;
  case 4:
    eightBall='Do not count on it';
  break;
  case 5:
    eightBall='My sources say no';
  break;
  case 6:
    eightBall='Outlook not so good';
  break;
  case 7:
    eightBall='Signs point to yes';
  break;
}
console.log(`The ball says: ${eightBall}.`);
*/
//Alternative control flow
if (randomNumber===0){
  eightBall='It is certain';
} else if (randomNumber===1){
  eightBall='It is decidedly so';
} else if (randomNumber===2){
  eightBall='It is certain';
} else if (randomNumber===3){
  eightBall='Reply hazy try again';
} else if (randomNumber===4){
  eightBall='Cannot predict now';
} else if (randomNumber===5){
  eightBall='Do not count on it';
} else if (randomNumber===6){
  eightBall='My sources say no';
} else if (randomNumber===7){
  eightBall='Signs point to yes';
} else {
  console.log('Sorry, Try again!!!');
}
console.log(`Mitzy the ball says: ${eightBall}.`);

