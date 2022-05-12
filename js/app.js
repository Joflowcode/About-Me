'use strict';

// Customize message to personally welcome users

let userName = prompt('Hello! What is the magic word? Hint: It is your name!');
console.log('The user name is ' + userName);
alert('Yes that was it! Thank you for sharing your name. I am about to ask you 5 yes or no questions about me. Have fun guessing!');
document.write('Thank you for doing my quiz ' + userName + ' I can\'t wait to learn more about you too!');


// Give users 5 true or false statements using If conditional based confirm command

let questionOne = prompt('Was I a guildmaster of an MMO game?').toLowerCase();

if(questionOne === 'yes' || questionOne === 'yas' || questionOne === 'y'){
  // console.log('Yes! I was a guildmaster for the Republic and Empire side guild on Star Wars: The Old Republic for about a year.');
  alert('Yes! I was a guildmaster for the Republic and Empire side guild on Star Wars: The Old Republic for about a year.');
} else if(questionOne === 'no' || questionOne === 'nope' || questionOne === 'n'){
  // console.log('Nope, not just one. But two guilds!');
  alert('Nope, not just one. But two guilds!');
}

let questionTwo = prompt('Have I kayaked on the Ocean?').toLowerCase();

if(questionTwo === 'yes' || questionTwo === 'yas' || questionTwo === 'y'){
  // console.log('Yup! And it was absolutely terrifying! It was my first time kayaking AND first time Ocean Kayaking.');
  alert('Yup! And it was absolutely terrifying! It was my first time kayaking AND first time Ocean Kayaking.');

} else if(questionTwo === 'no' || questionTwo === 'nope' || questionTwo === 'n'){
  // console.log('Nope! It was terrifying, and not sure I could ever replicate the 3 mile trip that I was scared and miserable the whole way. But it has become one of my favorite memories.');
  alert('Incorrect. It was terrifying, and not sure I could ever replicate the 3 mile trip that I was scared and miserable the whole way. But it has become one of my favorite memories.');
}

let questionThree = prompt('Do I have a phobia of escalators?').toLowerCase();

if(questionThree === 'yes' || questionThree === 'yas' || questionThree === 'y'){
  // console.log('You are correct! Moving stairs terrify me! I will walk up or down 20 flights of stairs to avoid them!');
  alert('You are correct! Moving stairs terrify me! I will walk up or down 20 flights of stairs to avoid them!');
} else if(questionThree === 'no' || questionThree === 'nope' || questionThree === 'n'){
  // console.log('No, I will walk up or down 20 flights of stairs to avoid them. Up I can do sometimes. Not down.');
  alert('No, I will walk up or down 20 flights of stairs to avoid them. Up I can do sometimes. Not down.');
}

let questionFour = prompt('Do I have one cat?').toLowerCase();

if(questionFour === 'yes' || questionFour === 'yas' || questionFour === 'y'){
  // console.log('No, I have two! One named Augustus Aurelius, the other Edwin Baldwin-Flow');
  alert('No, I have two! One named Augustus Aurelius, the other Edwin Baldwin-Flow');
} else if(questionFour === 'no' || questionFour === 'nope' || questionFour === 'n'){
  // console.log('Yes, you are correct it. I don\'t have one kitty, I have two kitties! Augustus Aurelius and Edwin Baldwin-Flow');
  alert('Yes, you are correct it. I don\'t have one kitty, I have two kitties! Augustus Aurelius and Edwin Baldwin-Flow');
}

let questionFive = prompt('Do I know how to make beer, kombucha, and wine?').toLowerCase();

if(questionFive === 'yes' || questionFive === 'yas' || questionFive === 'y'){
  // console.log('Yes! Wine has been a long time. Kombucha and homebrew are a hobby me and my partner do but it is his career as well. I started in December.');
  alert('Yes! Wine has been a long time. Kombucha and homebrew are a hobby me and my partner do but it is his career as well. I started in December.');

} else if(questionFive === 'no' || questionFive === 'nope' || questionFive === 'n'){
  // console.log('Incorrect! I was an observer for many years watching my partner. But if was meeting another black woman who is heavily involved and respected in the home brew industry that made it cross my mind. I see my partner make brews, kombucha, vinegar, kimchi. If it ferments he does it! But it took seeing someone like me for my brain to make a connection. See how incredible representation is? ');
  alert('Incorrect! I was an observer for many years watching my partner. But if was meeting another black woman who is heavily involved and respected in the home brew industry that made it cross my mind. I see my partner make brews, kombucha, vinegar, kimchi. If it ferments he does it! But it took seeing someone like me for my brain to make a connection. See how incredible representation is? ');
}



// 4 guesses
//let guesses = 4;
//let correctNum = false;

//while (guesses && !correctNum) {
// let
//}


let questionSixAnswer = 50;

for(let i = 0; i < 4; i++){
  let userGuess = +prompt('How many concerts have I attended?');
  console.log(questionSixAnswer);

  if(questionSixAnswer === userGuess){
    alert('You are correct! It is probably over 50, but at least I have went to!');
    i = 4;

  }if(userGuess < questionSixAnswer){
    alert('Nope! Definitely more!');

  }if(userGuess > questionSixAnswer){
    alert('Nope, but one day soon!');
  }

  if(i ===3){
    alert('Sorry, no more guesses. The answer was 50. Great try though!');
  }

}

//while(userGuess !== questionSixAnswer)

// find a way to make this loop stop (break?) after 4 tries with a loop

// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

// let questionSeven = prompt('Who are my favorite musicians and artists?')

let musicList = ['Coheed and Cambria', 'My Chemical Romance', 'SynthWave', 'Anna Nalick', 'Musc5', 'Music6'];
console.log(musicList);

//let musicListAns = musicList[6];

//for(let i = 0; i <=6; i++){
//let MusicGuess = prompt('Who do you think are favorite musicians and Rayabands?').toLowerCase();
//if ()
