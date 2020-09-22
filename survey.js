const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = '';

rl.question("What's your name? Nicknames are also acceptable :)  ", (answer) => {
  answers += answer;
  rl.resume();
  rl.question("What's an activity you like doing?  ", (answer) => {
    answers += answer;
    rl.resume();
    rl.question("What do you listen to while doing that?  ", (answer) => {
      answers += answer;
      rl.resume();
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)  ", (answer) => {
        answers += answer;
        rl.resume();
        rl.question("What's your favourite thing to eat for that meal?  ", (answer) => {
          answers += answer;
          rl.resume();
          rl.question("Which sport is your absolute favourite?  ", (answer) => {
            answers += answer;
            rl.resume();
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              answers += answer;
              console.log(answers);
              rl.close();
            });
          });
        });
      });
    });
  });
});
