const x = 'X';
const o = 'O';

let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

let currentMove = x;

const winContainer = document.getElementsByClassName("winContainer")[0];

const cells = [...document.getElementsByClassName('cell')];

const checkWin = () => {
    const cellValues = [...document.getElementsByClassName('cell')].map((cell) => cell.innerHTML);

    const winVariants = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ]

    const isEmptyCell = cellValues.find((cellValue) => cellValue === "");
    if (isEmptyCell === undefined) {

        const winContainer = document.getElementsByClassName("winContainer")[0];
        winContainer.innerHTML = "Round Draw!"
    }

    winVariants.forEach((variant) => {
        if (cellValues[variant[0]] === cellValues[variant[1]] &&
            cellValues[variant[0]] === cellValues[variant[2]] &&
            cellValues[variant[0]] !== "" &&
            cellValues[variant[1]] !== "" &&
            cellValues[variant[2]] !== "") {

            winContainer.innerHTML = `Winner is: ${cellValues[variant[0]]}!`
        }
    })

}

cells.forEach((cell) => {
    cell.onclick = () => {
        if (cell.innerHTML) {
            return
        }

        cell.innerHTML = currentMove;

        currentMove = currentMove === x ? o : x;

        checkWin()

        // другой вариант
        // if (currentMove === x) {
        //     currentMove = o;
        // } else {
        //     currentMove = x;
        // }
    }
})

const btnClose = document.getElementById('btn-close')

function handleRestartGame() {
    gameActive = true;
    gameState = ["", "", "", "", "", "", "", "", ""];
    winContainer.innerHTML = "";
    cells.forEach(cell => cell.innerHTML = "");
}

btnClose.addEventListener('click', handleRestartGame);
 

 
