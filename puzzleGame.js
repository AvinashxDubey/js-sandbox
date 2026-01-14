// const puzzleGame = ((arr, move) => {
//     let m = arr.length, n = arr[0].length;
//     let x = -1, y = -1;

//     for(let i=0; i<m; i++) {
//         for(let j=0; j<n; j++) {
//             if(arr[i][j] === 0) {
//                 x = i;
//                 y = j;
//                 break;
//             }
//         }
//     }

//     try{
//         let temp = 0
//         switch(move) {
//             case 'up':
//                 if(x-1 < 0) throw new Error('Invalid Move');
//                 temp = arr[x-1][y];
//                 arr[x-1][y] = 0;
//                 arr[x][y] = temp;
//                 break;
//             case 'down':
//                 if(x+1 >= m) throw new Error('Invalid Move');
//                 temp = arr[x+1][y];
//                 arr[x+1][y] = 0;
//                 arr[x][y] = temp;
//                 break;
//             case 'left':
//                 if(y-1 < 0) throw new Error('Invalid Move');
//                 temp = arr[x][y-1];
//                 arr[x][y-1] = 0;
//                 arr[x][y] = temp;
//                 break;
//             case 'right':
//                 if(y+1 >= n) throw new Error('Invalid Move');
//                 temp = arr[x][y+1];
//                 arr[x][y+1] = 0;
//                 arr[x][y] = temp;
//                 break;
//             default:
//                 throw new Error('Invalid Move');
//         }
//     } catch(err) {
//         console.log(err.message);
//     }
//     console.log(arr);
// })


// let board = [
//     [1, 2, 3],
//     [4, 0, 5],
//     [7, 8, 6]
// ]

// puzzleGame(board, 'left');
// puzzleGame(board, 'up');
// puzzleGame(board, 'right');
// puzzleGame(board, 'down');
// puzzleGame(board, 'down');
// puzzleGame(board, 'down');


const diffPuzzle = (arr, coord) => {
    let m = arr.length, n = arr[0].length;
    let [x, y] = coord;

    let x0 = -1, y0 = -1;
    // find coordinates of 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] === 0) {
                x0 = i;
                y0 = j;
                break;
            }
        }
    }

    // check if move is valid
    if ((Math.abs(x - x0) + Math.abs(y - y0) != 1) || (x < 0 || x >= m) || (y < 0 || y >= n)) {
        console.log('invalid move');
        return;
    }

    // swap
    let temp = arr[x][y];
    arr[x][y] = 0;
    arr[x0][y0] = temp;
    console.log(arr);
}

import promptSync from 'prompt-sync';
const prompt = promptSync();

const gameShell = () => {
    let board = [];
    let m = parseInt(prompt('Enter number of rows: '));
    let n = parseInt(prompt('Enter number of columns: '));
    console.log('Enter the board row-wise (use 0 for empty space): ');
    for(let i=0; i<m; i++) {
        board.push([]);
        for(let j=0; j<n; j++) {
            let val = parseInt(prompt(`Element at (${i}, ${j}): `));
            board[i].push(val);
        }
    }
    console.log('Initial Board: ');
    console.log(board);

    while(true) {
        let x = parseInt(prompt('Enter row of tile to move: '));
        let y = parseInt(prompt('Enter column of tile to move=: '));
        diffPuzzle(board, [x, y]);
        let ch = prompt('Do you want to continue? (y/n): ');
        if(ch.toLowerCase() !== 'y') break;
    }
}

gameShell();