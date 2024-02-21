const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (favoriteFood) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              console.log(`\nThank you for sharing!\n`);
              console.log(`Name: ${name}`);
              console.log(`Activity: ${activity}`);
              console.log(`Music: ${music}`);
              console.log(`Favourite Meal: ${meal}`);
              console.log(`Favourite Food: ${favoriteFood}`);
              console.log(`Favourite Sport: ${sport}`);
              console.log(`Superpower: ${superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
