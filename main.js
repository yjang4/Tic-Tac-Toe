const game = () => {
    let board;
    let turn = "X";
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
                    let idStr = id.toString();
                    let x = idStr[0];
                    let y = idStr[1];
                    board[x][y].state = turn;
                    stateDiv.textContent = turn;
                    checkWhoWon();
                    turn = turn == "X" ? "O" : "X";
                    stateDiv.className = "cell-state";
                    btn.appendChild(stateDiv);
                }
            });
        }
    }
    function checkWhoWon() {
        // diagonal win
        if(board[0][0].state != "none" && board[1][1].state != "none" && board[2][2].state != "none" &&
        board[0][0].state == board[1][1].state 
            && board[1][1].state == board[2][2].state) {
            sendVictoryMessage();
        }
        // diagonal win
        else if(board[0][2].state != "none" && board[1][1].state != "none" && board[2][0].state != "none" &&
        board[0][2].state == board[1][1].state 
            && board[1][1].state == board[2][0].state) {
            sendVictoryMessage();
        }
        for(i = 0; i < 3; i ++) {
            //horizontal win
            if(board[i][0].state != "none" && board[i][1].state != "none" && board[i][2].state != "none" &&
            board[i][0].state == board[i][1].state && 
                board[i][1].state == board[i][2].state) {
                sendVictoryMessage();
            }
            //vertical win
            else if(board[0][i].state != "none" && board[1][i].state != "none" && board[2][i].state != "none" &&
            board[0][i].state == board[1][i].state && 
                board[1][i].state == board[2][i].state) {
                sendVictoryMessage();
            }
        }
        //tie
        for(i = 0; i < 3; i ++) {
            for(j = 0; j < 3; j ++) {
                
            }
        }
        
    }
    function sendVictoryMessage() {
        let p = document.createElement("p");
        let container = document.getElementById("container");
        let message;
        if(turn == "X") message = "Player 1 won!";
        else message = "Player 2 won!";
        p.textContent = message;
        container.appendChild(p);
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
