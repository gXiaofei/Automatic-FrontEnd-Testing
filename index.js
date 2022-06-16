const board = ['OO', 'XXO', 'OXO'];
let newBoard = [];
let k;


board.forEach((item,index) => {
    item.split('').forEach(sub => {
        if(!Array.isArray(newBoard[index])) {
            newBoard[index] = [];
        }
        if(sub === ' ') {
            newBoard[index].push(0);
            k = ' ';
        }
        if(sub === 'O') {
            newBoard[index].push(1);
        }
        if(sub === 'X') {
            newBoard[index].push(-1);
        }
    });
})

let x = 0;
let y = 0;
let z = 0;
let w = 0;
let flag = false;

newBoard.forEach((_, i) => {
    if(flag) return;
    // 斜边
    x += newBoard[i][i]; 
    y += newBoard[i][newBoard.length - 1 - i];

    if(x === 3 || y === 3) {
        console.log('O');
        flag = true;
        return;
    }
    if(x === -3 || y === -3 ) {
        console.log('X');
        flag = true;
        return;
    }
    newBoard.forEach((_, j) => {
        if(flag) return;
        // 横向
        z += newBoard[i][j];
        // 纵向
        w += newBoard[j][i];


        if(z === 3 || w === 3) {
            console.log('O');
            flag = true;
            return;
        }
        if(z === -3 || w === -3) {
            console.log('X');
            flag = true;
            return;
        }
    })

    z = 0;
    w = 0;
})

if(!flag) {
    if(k === ' ') {
        console.log('pending')
    } else {
        console.log('draw')
    }
}
