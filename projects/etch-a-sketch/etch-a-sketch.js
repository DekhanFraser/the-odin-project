let drawingContainer = document.querySelector('.container')
let drawingBoardSize = 25;
let resizeButton = document.querySelector('.resize');

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
            drawingContainer.appendChild(cell);
        }
        let nextRow = document.createElement('div');
        nextRow.classList.add('break');
        drawingContainer.appendChild(nextRow);
    }
    let height = 1024 / boardSize;
    document.documentElement.style.setProperty('--cell-height', height + 'px');
    
    // Add a mouseover event for all newly created cells
    const cellsArray = document.querySelectorAll('.cell');
    cellsArray.forEach(element => {
        element.addEventListener('mouseover', () => {element.classList.add('hovered')})
    });
}

function resizeGrid(size) {
    drawingContainer.textContent = '';
    createGrid(size);
}

createGrid(drawingBoardSize);

// Add button at the top of the grid to prompt user for grid size
resizeButton.addEventListener('click', () => {let gridSize = prompt('Type in grid size:', 25); resizeGrid(gridSize);})