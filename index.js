let firstCard = 10
let secondCard = 11
let hasBlackJack = false
let isAlive = true
let message =""

let sum = firstCard + secondCard

if (sum <= 20) {
    message = "Do you want to draw a new card?";
} else if (sum === 21) {
    message = "YOU GOT BLACKJACK! CONGRATULATIONS";
    hasBlackJack = true
} else {
    message = "Sorry you're out, try next time :(";
    isAlive = false
}

console.log(message)