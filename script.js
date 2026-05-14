const board = document.getElementById('ludo-board');

// 225 dabbe banane ka loop
for (let i = 0; i < 225; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    
    // Position nikalna (Row aur Column)
    let row = Math.floor(i / 15); // Konsi line hai (0 se 14)
    let col = i % 15;             // Konsa column hai (0 se 14)

    // Top-Left Corner (Red) - Shuru ki 6 lines aur 6 columns
    if (row < 6 && col < 6) {
        cell.classList.add('red');
    }
    // Top-Right Corner (Green)
    else if (row < 6 && col > 8) {
        cell.classList.add('green');
    }
    // Bottom-Left Corner (Blue)
    else if (row > 8 && col < 6) {
        cell.classList.add('blue');
    }
    // Bottom-Right Corner (Yellow)
    else if (row > 8 && col > 8) {
        cell.classList.add('yellow');
    }
    // Center point (Beech ke 3x3 dabbe)
    else if (row >= 6 && row <= 8 && col >= 6 && col <= 8) {
        cell.classList.add('center-box');
    }

    board.appendChild(cell);
}
