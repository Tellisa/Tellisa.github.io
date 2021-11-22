let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly=true;
let runnerAge=18;
//Control flow
if (runnerAge>18 && registerEarly){
  raceNumber+=1000;
}

if (runnerAge>18 && registerEarly){
  console.log(`Hello number ${raceNumber}, your race is at 9:30 am.`)
} else if(runnerAge>18 && !registerEarly){
  console.log(`Hello number ${raceNumber}, your race is at 11:00 am.`);
} else if (runnerAge< 18){
  console.log(`Hey young one! Your number is ${raceNumber} and your race starts at 12:30 pm.`);
} else{
  console.log('Kindly report to the registration desk to get your issue sorted.');
}
