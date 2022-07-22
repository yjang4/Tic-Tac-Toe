const game = () => {
    let board;
    let turn = "X";
    const sayHello = () => console.log('hello!');
    function makeBoard() {
        board = new Array(3);
        for(i = 0; i < board.length; i ++) {
            board[i] = [];
            for(j = 0; j < 3; j ++) {
                let c = cell("none");
                board[i].push(c);
            }
        };
    }
    function writeBoard(){
        const grid = document.getElementById("grid");
        for(i = 0; i < board.length; i ++) {
            for(j = 0; j < board[i].length; j ++) {
                let div = document.createElement("div");
                div.id = `${i}${j}`;
                div.className = "cell";
                grid.appendChild(div);
            }
        }
    }
    function makeBoardClickable() {
        let cellButtons = document.getElementsByClassName("cell");
        for(i = 0; i < cellButtons.length; i ++) {
            let id = cellButtons[i].id;
            let btn = document.getElementById(id);
            btn.addEventListener("click", function() {
                let stateDiv = document.createElement("div");
                if(!btn.firstChild) {
                    stateDiv.textContent = turn;
                    turn = turn == "X" ? "O" : "X";
                    stateDiv.className = "cell-state";
                    btn.appendChild(stateDiv);
                }
            });
        }
    }
    return {board, makeBoard, writeBoard, makeBoardClickable};
};
const cell = (state) => {
    return {state};
};
const newGame = game();
newGame.makeBoard();
newGame.writeBoard();
newGame.makeBoardClickable();
