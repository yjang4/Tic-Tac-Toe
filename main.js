const makeGame = (board) => {
    return {board};
};
const cell = (state) => {
    return {state};
};
let board = new Array(3);
for(i = 0; i < board.length; i ++) {
    board[i] = [];
    for(j = 0; j < 3; j ++) {
        let c = cell("none");
        board[i].push(c);
    }
}