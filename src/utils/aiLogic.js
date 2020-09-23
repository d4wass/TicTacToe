
import { checkWinner } from './GameLogic';

export function bestMove(board, player1, player2) {
    const comp = player1;
    const player = player2
    let bestScore = -Infinity;
    let move;

    if (comp.turn) {
        for (let i = 0; i < 9; i++) {
            // Is the spot available?
            if (board[i] === '') {
              board[i] = comp.figure;
              let score = minimax(board, 0, false, comp, player);
              board[i] = '';
              if (score > bestScore) {
                bestScore = score;
                move = i ;
              }
            }
        }
        board[move] = comp.figure;
        console.log(board);
        console.log(move)
        return move;
    }
  }

  let scores = {
    x: 10,
    o: -10,
    draw: 0
  };

  function minimax(board, depth, isMaximizing, comp, player) {
    let result = checkWinner(board);
    if (result !== undefined) {
      return scores[result];
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
          // Is the spot available?
          if (board[i] === '') {
            board[i] = comp.figure;
            let score = minimax(board, depth + 1, false, comp, player);
            board[i] = '';
            bestScore = Math.max(score, bestScore);
          }
        }
        return bestScore;
      }

    else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
          // Is the spot available?
          if (board[i] === '') {
            board[i] = player.figure;
            let score = minimax(board, depth + 1, true,  comp, player);
            board[i] = '';
            bestScore = Math.min(score, bestScore);
          }
      }
      return bestScore;
    }
   }