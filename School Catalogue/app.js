class School{
  constructor(name,level,numberOfStudents){
    this._name=name;
    this._level=level;
    this._numberOfStudents=numberOfStudents;

  }
  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  set numberOfStudents(newNumberOfStudents){
    if (typeof newNumberOfStudents === 'number'){
      this._numberOfStudents=newNumberOfStudents;
    }
    else{
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }

  }

 quickFacts(){
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  
  }
  static pickSubstituteTeacher(substituteTeachers){
    let randomChoice=  Math.floor(Math.random()*(substituteTeachers.length));
    return substituteTeachers[randomChoice];

    }
}

class PrimarySchool extends School{
  constructor (name,numberOfStudents,pickupPolicy){
    super(name,'primary',numberOfStudents);
    this._pickupPolicy=pickupPolicy;
  }

  get pickupPolicy(){
    return this._pickupPolicy;

  }
}

class HighSchool extends School{
  constructor(name,numberOfStudents,sportsTeams){
    super(name,'high',numberOfStudents);
    this._sportsTeams=sportsTeams;
  }

  get sportsTeams(){
    console.log(this._sportsTeams);
  }
}

class MiddleSchool extends School{
  constructor(name,numberOfStudents){
    super(name,'middle',numberOfStudents);

  }
}
 
 class SchoolCatalog{
   constructor(level,schools){
     this._level=level;
     this._schools=schools;
   }
   get level(){
     return this._level;
     
   }
   get schools(){
     return this._schools;
   }
    set level(newLevel){
      let levels=['high','middle','primary'];
      if (newLevel in levels){
        this._level=newLevel;
      }
      else{
        console.log('Kindly enter primary, high or middle school level.')
      }
    }


 }
const lorraineHansburry = new PrimarySchool('Lorraine Hansburry',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansburry.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford','Lou Williams','J.R. Smith','James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool('Al E. Smith',415,['Baseball','Basketball','Volleyball','Track and Field']);
 console.log(alSmith.sportsTeams);

 const milaKunis= new MiddleSchool('Mila Kunis',500);
 milaKunis.quickFacts();

 const numOne= new SchoolCatalog('high',['WGHS','HCS','Hope College']);
const numTwo= new SchoolCatalog('middle',['TLA','HCS','Hope Middle School']);
const numThree= new SchoolCatalog('primary',['WGHS Primary School','HCS','Hope Primary School']);
console.log(numOne);
console.log(numTwo);
console.log(numThree);
