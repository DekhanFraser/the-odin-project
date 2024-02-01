let drawingboard = document.querySelector('.container')

// Create drawing board by adding "cell" divs to act as pixels
function createGrid(boardSize) {
    for (let y = 0; y < boardSize; y++) {
        for (let x = 0; x < boardSize; x++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            // cell.textContent = 'x';
            if (x == boardSize-1) {
                cell.classList.add('border-right');
            }
            if (y == boardSize-1) {
                cell.classList.add('border-bottom');
            }
            drawingboard.appendChild(cell);
        }
        let nextRow = document.createElement('div');
        nextRow.classList.add('break');
        drawingboard.appendChild(nextRow);
    }
    let height = 1024 / boardSize;
    document.documentElement.style.setProperty('--cell-height', height + 'px');
}

createGrid(5);

// Create a mouse-over effect that changes the color of the cell hovered over

// Add button at the top of the grid to prompt user for grid size

// Extra
// Make the hover effect change color at random

// Implement progressive coloring of the cells (by 10% per hover)
