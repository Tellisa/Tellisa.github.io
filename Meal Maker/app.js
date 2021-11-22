const menu={
  _courses:{
    appetizers:[],
    mains:[],
    desserts:[]
  },
  // getter functions
  get appetizers(){
    return this._courses.appetizers;
  },
  get mains(){
    return this._courses.mains; 
  },
  get desserts(){
    return this._courses.desserts; 
  },
  get courses(){
    return{ 
      appetizers:this.appetizers,
      mains:this.mains,
      desserts:this.desserts
    };
    },
  //setter functons
  set appetizers(appetizersIn){
    return this._courses.appetizers=appetizersIn; 
  },
  set mains(mainsIn){
    return this._courses.mains=mainsIn; 
  },
  set desserts(dessertsIn){
    return this._courses.desserts=dessertsIn; 
  },
  addDishToCourse(courseName,dishName,dishPrice){
    const dish={
      name:dishName,
      price:dishPrice
      }
    return this._courses[courseName].push(dish);
},  
getRandomDishFromCourse(courseName){
  const dishes=this._courses[courseName];
  // return a dish from `dishes` by using `randomIndex`
  const randomIndex= Math.floor(Math.random()*dishes.length);
  return dishes[randomIndex];
}, 
generateRandomMeal(){
  const appetizer=this.getRandomDishFromCourse('appetizers');
  const dessert=this.getRandomDishFromCourse('desserts'); 
  const main=this.getRandomDishFromCourse('mains');
  const totalPrice=appetizer.price+dessert.price+ main.price;
return `Your meal is ${appetizer.name}, ${main.name},${dessert.name}... The price is $${totalPrice}.`;
}

};

//test
menu.addDishToCourse('appetizers','Caesar Salad',4.25);
menu.addDishToCourse('appetizers','Tuna Salad',3.25);
menu.addDishToCourse('appetizers','Seafood Salad',5.00);

menu.addDishToCourse('mains','Beans and Plantain',10.00);
menu.addDishToCourse('mains','Fried rice',12.00);
menu.addDishToCourse('mains','Banku and Okro Soup',15.00);

menu.addDishToCourse('desserts','Sobolo',3.00);
menu.addDishToCourse('desserts','Dzowe',2.00);
menu.addDishToCourse('desserts','Condense Toffee',3.50);

const meal=menu.generateRandomMeal();
console.log(meal)

