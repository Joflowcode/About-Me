'use strict';

let userName = prompt('Hello! What is the magic word? Hint: It is your name!');
console.log('The user name is ' + userName);
alert('Yes that was it! Thank you for sharing your name. I am about to ask you 5 yes or no questions about me. Have fun guessing!');
document.write('Thank you for playing my quiz ' + userName + ' I can\'t wait to learn more about you too!');
// troubleshoot error when using getbyelementid and innerhtml method later


function q1(){
  let questionOne = prompt('Was I a guildmaster of an MMO game?').toLowerCase();

  if(questionOne === 'yes' || questionOne === 'yas' || questionOne === 'y'){
    alert('Yes! I was a guildmaster for the Republic and Empire side guild on Star Wars: The Old Republic for about a year.');
  } else if(questionOne === 'no' || questionOne === 'nope' || questionOne === 'n'){
    alert('Nope, not just one. But two guilds!');
  }
}

q1();

function q2() {
  let questionTwo = prompt('Have I kayaked on the Ocean?').toLowerCase();

  if(questionTwo === 'yes' || questionTwo === 'yas' || questionTwo === 'y'){
    alert('Yup! And it was absolutely terrifying! It was my first time kayaking AND first time Ocean Kayaking.');

  } else if(questionTwo === 'no' || questionTwo === 'nope' || questionTwo === 'n'){
    alert('Incorrect. It was terrifying, and not sure I could ever replicate the 3 mile trip that I was scared and miserable the whole way. But it has become one of my favorite memories.');
  }
}

q2();

function q3(){
  let questionThree = prompt('Do I have a phobia of escalators?').toLowerCase();

  if(questionThree === 'yes' || questionThree === 'yas' || questionThree === 'y'){
    alert('You are correct! Moving stairs terrify me! I will walk up or down 20 flights of stairs to avoid them!');
  } else if(questionThree === 'no' || questionThree === 'nope' || questionThree === 'n'){
    alert('No, I will walk up or down 20 flights of stairs to avoid them. Up I can do sometimes. Not down.');
  }
}

q3();

function q4(){
  let questionFour = prompt('Do I have one cat?').toLowerCase();

  if(questionFour === 'yes' || questionFour === 'yas' || questionFour === 'y'){
    alert('No, I have two! One named Augustus Aurelius, the other Edwin Baldwin-Flow');
  } else if(questionFour === 'no' || questionFour === 'nope' || questionFour === 'n'){
    alert('Yes, you are correct it. I don\'t have one kitty, I have two kitties! Augustus Aurelius and Edwin Baldwin-Flow');
  }
}

q4();

function q5(){
  let questionFive = prompt('Do I know how to make beer, kombucha, and wine?').toLowerCase();

  if(questionFive === 'yes' || questionFive === 'yas' || questionFive === 'y'){
    alert('Yes! Wine has been a long time. Kombucha and homebrew are a hobby me and my partner do but it is his career as well. I started in December.');

  } else if(questionFive === 'no' || questionFive === 'nope' || questionFive === 'n'){
    alert('Incorrect! I was an observer for many years watching my partner. But if was meeting another black woman who is heavily involved and respected in the home brew industry that made it cross my mind. I see my partner make brews, kombucha, vinegar, kimchi. If it ferments he does it! But it took seeing someone like me for my brain to make a connection. See how incredible representation is? ');
  }
}

q5();

function q6(){
  let questionSixAnswer = 50;

  for(let i = 0; i < 4; i++){
    let userGuess = +prompt('How many concerts have I attended?');
    console.log(questionSixAnswer);

    if(questionSixAnswer === userGuess){
      alert('You are correct! It is probably over 50, but it has been at least 50 I can count.');
      i = 4;
      break;

    }if(userGuess < questionSixAnswer){
      alert('Nope! Definitely more!');

    }if(userGuess > questionSixAnswer){
      alert('Nope, but one day soon!');
    }

    if(i ===3){
      alert('Sorry, no more guesses. The answer was 50. Great try though!');
    }
  }
}

q6();

let score = 0;

function q7(){
  let myFavMusicArr = ['Coheed and Cambria', 'My Chemical Romance', 'Synthwave Pop', 'Matchbox 20', 'Broadway Musicals', 'Janelle Monae'];

  for(let i = 0; i < 6; i++){
    let myFavMusicGuess = prompt('What is some of my favorite music to listen to?').toLowerCase();

    for(let j = 0; j < myFavMusicArr.length; j++){
      if(myFavMusicGuess === myFavMusicArr[j]){
        alert('You guessed it! And this is just the tip of the ice berg as I love all music genres.');
        score++;
        i = 6;
        break;
      }
    }
  }

  alert(`Some of my favorite music is ${myFavMusicArr}`);
  alert(`Your score was ${score} out of 6`);
}

q7();
