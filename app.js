// ----------------------------------- NUMBER GUESSING GAME -----------------------------------
// 1. Generate a random number between 1 and 100
// 2. Ask the user to guess the number
// 3. If the user's guess is lower than the random number, say "Too low"
// 4. If the user's guess is higher than the random number, say "Too high"
// 5. If the user's guess is equal to the random number, say "Congratulations! The answer was [answer]. It took you [number of attempts] attempts."
// 6. Allow the user to guess the number multiple times until they guess correctly
// 7. THe code will stop thanks to "running = false;"


// 1. Generate a random number between 1 and 100

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);
    console.log(answer);
    if(isNaN(guess)){
        window.alert('Please enter a valid number');
    } 
    else if (guess < minNum || guess > maxNum){
        window.alert(`Please enter a number between ${minNum} and ${maxNum}`);
    }
    else {
        attempts++;
        if(guess < answer){
            window.alert("That's too low! Please try again.");
        } else if (guess > answer){
            window.alert("That's too high! Please try again.");
        } else {
            window.alert(`Congratulations! The answer was ${answer}. It took you ${attempts} attempts.`);
            running = false;
        }
    }
}