const diceImages = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];
let score1 = 0;
let score2 = 0;

const rollDice = () => {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById('dice1').src = diceImages[dice1 - 1];
    document.getElementById('dice2').src = diceImages[dice2 - 1];

    score1 += dice1;
    score2 += dice2;

    document.getElementById('score1').innerText = score1;
    document.getElementById('score2').innerText = score2;

    if (score1 >= 20 || score2 >= 20) {
        const winner = score1 >= 20 ? 'Player 1' : 'Player 2';
        document.getElementById('winner').innerText = `${winner} wins!`;
        document.getElementById('rollBtn').disabled = true;
    }
}
// adding dice-roll sound effect
const diceSound = document.getElementById('diceSound');

const playDiceSound = () => {
    diceSound.currentTime = 0;
    diceSound.play();
}

document.getElementById('rollBtn').addEventListener('click', () => {
    rollDice();
    playDiceSound();
});


document.getElementById('rollBtn').addEventListener('click', rollDice);
