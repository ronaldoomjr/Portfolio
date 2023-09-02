let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let message = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

// Contador

let player1 = 0;
let player2 = 0;

// Add o evento de click aos boxes 

for(let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function(){
        
        let el = checkEl(player1, player2);      
        

    // verifica a jogada
        
        if(this.children.length == 0) {
            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            // computar as jogadas

            if(player1 == player2) {
                player1++;

                if(secondPlayer == 'ai-player') {

                    computerPlay();
                    player2++;
                }

            } else {
                player2++
            }

            // ver quem venceu 

            checkWinCondition();

        }
    })
}

// evento para saber como irá ser o jogo 

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function() {
        

        secondPlayer = this.getAttribute('id');

        for(let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';
        }

        setTimeout(function(){
            let container = document.querySelector('#container');
            container.classList.remove('hide');
        }, 500);
    });
}

function checkEl(player1, player2){
    if(player1 == player2) {
        el = x;
    } else {
        el = o;
    }

    return el;
}

// ver quem venceu 

function checkWinCondition(){

    let b1 = document.querySelector('#block-1');
    let b2 = document.querySelector('#block-2');
    let b3 = document.querySelector('#block-3');
    let b4 = document.querySelector('#block-4');
    let b5 = document.querySelector('#block-5');
    let b6 = document.querySelector('#block-6');
    let b7 = document.querySelector('#block-7');
    let b8 = document.querySelector('#block-8');
    let b9 = document.querySelector('#block-9');

    // checando as possibilidades horizontais

    if(b1.children.length > 0 && b2.children.length > 0 && b3.children.length > 0) {

        let b1Child = b1.children[0].className;
        let b2Child = b2.children[0].className;
        let b3Child = b3.children[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            declareWinner('x');
        } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            declareWinner('o');
        }
    }

    if(b4.children.length > 0 && b5.children.length > 0 && b6.children.length > 0) {

        let b4Child = b4.children[0].className;
        let b5Child = b5.children[0].className;
        let b6Child = b6.children[0].className;

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            declareWinner('x');
        } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            declareWinner('o');
        }
    }

    if(b7.children.length > 0 && b8.children.length > 0 && b9.children.length > 0) {

        let b7Child = b7.children[0].className;
        let b8Child = b8.children[0].className;
        let b9Child = b9.children[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            declareWinner('x');
        } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            declareWinner('o');
        }
    }

    // verticais 

    if(b1.children.length > 0 && b4.children.length > 0 && b7.children.length > 0) {

        let b1Child = b1.children[0].className;
        let b4Child = b4.children[0].className;
        let b7Child = b7.children[0].className;

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            declareWinner('x');
        } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            declareWinner('o');
        }
    }

    if(b2.children.length > 0 && b5.children.length > 0 && b8.children.length > 0) {

        let b2Child = b2.children[0].className;
        let b5Child = b5.children[0].className;
        let b8Child = b8.children[0].className;

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            declareWinner('x');
        } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            declareWinner('o');
        }
    }

    if(b3.children.length > 0 && b6.children.length > 0 && b9.children.length > 0) {

        let b3Child = b3.children[0].className;
        let b6Child = b6.children[0].className;
        let b9Child = b9.children[0].className;

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            declareWinner('x');
        } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            declareWinner('o');
        }
    }

    // Diagonal

    if(b1.children.length > 0 && b5.children.length > 0 && b9.children.length > 0) {

        let b1Child = b1.children[0].className;
        let b5Child = b5.children[0].className;
        let b9Child = b9.children[0].className;

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            declareWinner('x');
        } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            declareWinner('o');
        }
    }

    if(b3.children.length > 0 && b5.children.length > 0 && b7.children.length > 0) {

        let b3Child = b3.children[0].className;
        let b5Child = b5.children[0].className;
        let b7Child = b7.children[0].className;

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            declareWinner('x');
        } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            declareWinner('o');
        }
    }

    // deu velha

    let counter = 0;

    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].children[0] != undefined) {
            counter++;
        }
    }

    if(counter == 9) {
        declareWinner('Deu Velha!');
    }
}

// resetar o jogo, declarar o vencedor e atualizar o placar

function declareWinner(winner) {

    let scoreboardX = document.querySelector('#scoreboard-1');
    let scoreboardO = document.querySelector('#scoreboard-2');
    let msg = '';

    if(winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = 'O jogador 1 venceu!';
    } else if (winner == 'o') {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        msg = 'O jogador 2 venceu!';
    } else {
        msg = 'Deu Velha!';
    }

    // exibindo a msg

    messageText.innerHTML = msg;
    message.classList.remove('hide');

    // esconder msg 

    setTimeout(function(){
        message.classList.add('hide');
    }, 3000);

    // zerar as jogadas

    player1 = 0;
    player2 = 0;

    // remove x e o 

    let boxesToRemove = document.querySelectorAll('.box div');

    for(let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
   

}

// executar a lógica da jogada da CPU

function computerPlay(){

    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for(let i = 0; i < boxes.length; i ++){

        let randomNumber = Math.floor(Math.random() * 5);

        if(boxes[i].children[0] == undefined) {
            if(randomNumber <= 1 ) {
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
        } else {
            filled++;
        }
    }

    if(counter == 0 && filled < 9 ){
        computerPlay();
    }
}