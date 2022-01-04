let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
// split string into individual words
let storyWords= story.split(' ');
//console.log(storyWords);
//console.log(storyWords.length);
// check if word in storWords is unnecessary
function wordCheck(word){
  if (!(unnecessaryWords.includes(word))){
    return word;
  }
};
//filter out unnecessary words in storyWords
let betterWords= storyWords.filter(wordCheck);
//console.log(betterWords.length);

// let user know number of times they used 'overused words'

let reallyCheck= 0;
let veryCheck=0;
let basicallyCheck=0;

for (const word of storyWords){
  if (word==='really'){
     reallyCheck++;
  }
  else if (word==='very'){
   veryCheck++;
  }
  else if(word==='basically'){
    basicallyCheck++;
  }
}

//count how many sentences are in the paragraph
let sentences = 0;
storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences+=1;
  }
});
//log word count, sentence count and overused words count to the console
function logCount(){
console.log('The word count is '+storyWords.length);
console.log('The sentence count is  '+sentences);
  console.log('You used "really" '+reallyCheck+' times.');
console.log('You used "very" '+veryCheck+' times.');
console.log('You used "basically" '+basicallyCheck+' times.');
}
logCount();


//log betterWords array as a single string
console.log(betterWords.join(' '));


