class Media{
  constructor(title){
   this._title=title;
   this._isCheckedOut=false;
   this._ratings=[];

  }
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
   get ratings(){
     return this._ratings;
   }

   set isCheckedOut(value){
     this._isCheckedOut= value;
   }
   toggleCheckOutStatus(){
     this._isCheckedOut=!this._isCheckedOut;
    
   }
   getAverageRating(){
     let reducer = (previousValue, currentValue) => previousValue + currentValue;
    
     
     return this.ratings.reduce(reducer)/this.ratings.length;
   }
   addRating(value){
     this.ratings.push(value);

   }

}

class Book extends Media{
  constructor(title,author,pages){
    super(title);
      this._author=author;
      this._pages=pages;
      

    
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
}

class Movie extends Media{
  constructor(director,title,runTime,movieCast){
    super (title);
    this._runTime=runTime;
    this._director=director;
    this._movieCast=movieCast;
    
  }
  get runTime(){
    return this._runTime;
  }
  get director(){
    return this._director;
  }

  get movieCast(){
    return this._movieCast;
  }
}

class CD extends Media{
  constructor(title,artist,songs){
    super(title);
    this._artist=artist;
    this._songs=songs;
    }
    get artist(){
      return this._artist;
    }
    get songs(){
      return this._songs;
    }
    
}



const historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson',544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());


const speed = new Movie('Jan de Bont','Speed',116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

const compact= new CD('22','Taylor Swift',['Wildest Dreams', 'Red','Trouble']);

compact.addRating(4);

