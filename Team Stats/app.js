const team={
  _players:[
   { 
     firstName:'Anthony',
     lastName:'Griezman',
     age:30
     },
     { 
     firstName:'Michael',
     lastName:'Essien',
     age:45
     },
    { 
     firstName:'Christiano',
     lastName:'Ronaldo',
     age:38}
    ],
  _games:[
       { 
     opponent:'Broncos',
     teamPoints:25,
     opponentPoints:30
     },
      { 
     opponent:'Spurs',
     teamPoints: 28,
     opponentPoints:37
     },
      { 
     opponent:'Jets',
     teamPoints:101,
     opponentPoints:73
     },
  ],
  
 get players(){
    return this._players;
    },

  get games(){
    return this._games;
  },
  addPlayer(firstName,lastName,age){
    const player={
      firstName:firstName,
      lastName:lastName,
      age:age
    }
    return this._players.push(player);
    },
  addGame(opponentName,teamPoints,opponentPoints){
    const game={
      opponent:opponentName,
      teamPoints:teamPoints,
      opponentPoints:opponentPoints
    }
    return this._games.push(game);

  }
};
//test
team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);

console.log(team._players)

team.addGame('Tigers',50,38);
team.addGame('Yankees',16,14);
team.addGame('Bears',123,80);

console.log(team._games)






