// number of hours slept each day
const getSleepHours= day=>{
  day=day.toLowerCase();
 // const hours=Math.floor(Math.random()*8);
  switch (day){
    case 'monday':
      //return hours;
      return 10;
      break;
    case 'tuesday':
      //return hours;
      return 14;
      break;
    case 'wednesday':
      //return hours;
      return 2;
      break;
    case 'thursday':
     // return hours;
     return 8;
      break;
    case 'friday':
      //return hours;
      return 8;
      break;
    case 'saturday':
      //return hours;
      return 8;
      break;
    case 'sunday':
      //return hours;
      return 12;
      break;
    default:
      return 'Error';
      
      }

};
 /*
 //Test
console.log(getSleepHours('Sunday'));
console.log(getSleepHours('Friday'));
console.log(getSleepHours('Wednesday'));
console.log(getSleepHours('Banku'));*/ 

//total number of hours slept
//Method 1
/*
const getActualSleepHours = ()=>
getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') +getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') +getSleepHours('Sunday');
*/
//Method 2
const getActualSleepHours = ()=> 10+14+2+8+8+8+12;


 
//get ideal sleep hours per week
//method 1
/*
const getIdealSleepHours=()=>{
  const idealHours = 8;
  return idealHours*7;
};
*/
//method 2
const getIdealSleepHours=idealNumber=>idealNumber*7;


//Test 
/*
console.log(getActualSleepHours());
console.log(getIdealSleepHours());
*/

//calculate sleep debt
const calculateSleepDebt = () =>{
  const actualSleepHours=getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(10);
  if (actualSleepHours===idealSleepHours){
    console.log('Hello User, you slept for '+idealSleepHours+ ' hours.You got the perfect amount of sleep.');
} else if(actualSleepHours>idealSleepHours){
  console.log('Wow! You slept for '+actualSleepHours+' hours. That was more than needed.');
}else{
  console.log('You should get some rest.You slept for only '+actualSleepHours+' hours.');
}

};
//function call
 calculateSleepDebt();



