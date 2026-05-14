const board = document.getElementById('ludo-board');

// Pehle ka board clear kar lete hain (page refresh hone par)
board.innerHTML = ''; 

for (let i = 0; i < 225; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    
    let row = Math.floor(i / 15);
    let col = i % 15;

    // 1. Kono ke Ghar (Base)
    if (row < 6 && col < 6) { cell.classList.add('red'); }
    else if (row < 6 && col > 8) { cell.classList.add('green'); }
    else if (row > 8 && col < 6) { cell.classList.add('blue'); }
    else if (row > 8 && col > 8) { cell.classList.add('yellow'); }
    
    // 2. Center Point (Beech ka hissa)
    else if (row >= 6 && row <= 8 && col >= 6 && col <= 8) { 
        cell.classList.add('center-box'); 
    }
    
    // 3. Home Paths (Jeet ka raasta - Center tak jane wali 5 dabbon ki line)
    else if (row === 7 && col >= 1 && col <= 5) { cell.classList.add('red'); }
    else if (col === 7 && row >= 1 && row <= 5) { cell.classList.add('green'); }
    else if (col === 7 && row >= 9 && row <= 13) { cell.classList.add('blue'); }
    else if (row === 7 && col >= 9 && col <= 13) { cell.classList.add('yellow'); }
    
    // 4. Start Points (Jahan 6 aane par goti rakhi jati hai)
    else if (row === 6 && col === 1) { cell.classList.add('red'); }
    else if (row === 1 && col === 8) { cell.classList.add('green'); }
    else if (row === 13 && col === 6) { cell.classList.add('blue'); }
    else if (row === 8 && col === 13) { cell.classList.add('yellow'); }

    board.appendChild(cell);
}
// Pase ko ghumane ka function
function rollDice() {
    // 1 se 6 ke beech random number nikalna
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    
    // HTML mein pase ke dabbe mein number dikhana
    let diceBox = document.getElementById('dice-box');
    diceBox.innerText = randomNumber;
    
    // Thoda animation jaisa feel dene ke liye color change
    diceBox.style.backgroundColor = "#e0e0e0";
    setTimeout(() => {
        diceBox.style.backgroundColor = "white";
    }, 200);
}
