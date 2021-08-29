let gameplaying, scores, activeplayer, roundscore, prevdice;


start();

document.querySelector('.btnnew').addEventListener('click', start);

document.querySelector('.btnroll').addEventListener('click', () => {
    if (gameplaying) {
        let die1 = Math.floor(Math.random() * 6) + 1;
        let die2 = Math.floor(Math.random() * 6) + 1;

        document.getElementById('dice1').style.display = 'block';
        document.getElementById('dice2').style.display = 'block';
        document.getElementById('dice1').src = 'photos/Dice' + die1 + '.jpg';
        document.getElementById('dice2').src = 'photos/Dice' + die2 + '.jpg';

        if ((die1 === 6 && prevdice === 6) || (die1===die2)) {
            scores[activeplayer] = 0;
            document.querySelector('#score-' + activeplayer).textContent = '0';
            nextplayer();
        }
        else if (die1 !== 1 && die2 !== 1) {
            roundscore += die1 + die2;
            document.querySelector('#current-' + activeplayer).textContent = roundscore;
        }
        else {
            nextplayer();
        }
        prevdice = die1;
    }
});

document.querySelector('.btnhold').addEventListener('click', () => {
    if (gameplaying) {
        scores[activeplayer] += roundscore;
        document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer];
        let input = document.getElementById('winningscore').value;
        let ws;

        if (input) {
            ws = input;
        }
        else {
            ws = 100;
        }

        if (scores[activeplayer] >= ws) {
            if (activeplayer === 0) {
                document.querySelector('#name-' + activeplayer).textContent = "You're Winner!";
            }
            else {
                document.querySelector('#name-' + activeplayer).textContent = "Oops! Computer Wins";
            }
            document.getElementById('dice1').style.display = 'none';
            document.getElementById('dice2').style.display = 'none';
            document.querySelector('.player-' + activeplayer).classList.add('winner');
            document.querySelector('.player-' + activeplayer).classList.remove('active');
            gameplaying = false;
        }
        else {
            nextplayer();
        }
    }
})

function start() {
    gameplaying = true;
    scores = [0, 0];
    activeplayer = 0;
    roundscore = 0;

    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Your Score';
    document.getElementById('name-1').textContent = 'Computer Score';

    document.querySelector('.player-0').classList.remove('winner');
    document.querySelector('.player-1').classList.remove('winner');
    document.querySelector('.player-0').classList.remove('active');
    document.querySelector('.player-0').classList.remove('active');
    document.querySelector('.player-1').classList.remove('active');
    document.querySelector('.player-0').classList.add('active');
}

function nextplayer() {
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    roundscore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');
    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';
}
