import React, { Component } from "react";
import { checkWinner } from '../utils/GameLogic';
import { bestMove } from '../utils/aiLogic';

export const MyContext = React.createContext();

export class MyProvider extends Component {
  state = {
    player1: {
      name: "x",
      result: 0,
      figure: "x",
      turn: true,
      gameWinner: false
    },
    player2: {
      name: "o",
      result: 0,
      figure: "o",
      turn: false,
      gameWinner: false
    },
    figures: ['x', 'o'],
    fields: new Array(9).fill(""),
    // fields: ["x", "o", "x", "o", "", "", "", "x", "o"],
    isModalOpen: false,
    gameEnd: false,
    gameDraw: false,
    gameType: {
      pvp: false,
      pvc: false
    }
  };

  handleConsole = (index) => {
    console.log('działa');
    const { player1, player2, fields } = this.state;
    const updateBoard = fields;
    const updatePlayer1 = player1;
    const updatePlayer2 = player2;
    const move = bestMove(updateBoard, updatePlayer1, updatePlayer2)

    if (!player1.turn && !player2.turn) {
      return
    }
    console.log(move)
    console.log(updateBoard[move])
    if (updatePlayer1.turn ) {
      console.log('wpadam')
      updateBoard[move] = updatePlayer1.figure;
      updatePlayer1.turn = false;
      updatePlayer2.turn = true;
    } else if (updatePlayer2.turn && updateBoard[index] === "") {
      updateBoard[index] = updatePlayer2.figure;
      updatePlayer2.turn = false;
      updatePlayer1.turn = true;
    }

    const updateFigure = checkWinner(updateBoard);

    this.setState({
      fields: updateBoard,
      player1: updatePlayer1,
      player2: updatePlayer2,
    });
    this.setResult(updateFigure);
  }

  handleMove = (index) => {
    const { player1, player2, fields } = this.state;
    const updateBoard = fields;
    const updatePlayer1 = player1;
    const updatePlayer2 = player2;

    if (!player1.turn && !player2.turn) {
      return
    }

    if (updatePlayer1.turn && updateBoard[index] === "") {
      updateBoard[index] = updatePlayer1.figure;
      updatePlayer1.turn = false;
      updatePlayer2.turn = true;
    } else if (updatePlayer2.turn && updateBoard[index] === "") {
      updateBoard[index] = updatePlayer2.figure;
      updatePlayer2.turn = false;
      updatePlayer1.turn = true;
    }

    const updateFigure = checkWinner(updateBoard);

    this.setState({
      fields: updateBoard,
      player1: updatePlayer1,
      player2: updatePlayer2,
    });
    this.setResult(updateFigure);
  };

  handleInput = (e) => {
    const { name, value, id } = e.target;
    if (id === 'player1') {
      this.setState((prevState) => ({
        player1: {
        ...prevState.player1,
        [name]: value,
      }
      }))
    } else if (id === 'player2') {
        this.setState((prevState) => ({
        player2: {
          ...prevState.player2,
          [name]: value,
        }
      }))
    }
  }

  handleRadioInput = (e) => {
    const { value, id } = e.target;
     if (id === 'player1') {
      this.setState((prevState) => ({
        player1: {
        ...prevState.player1,
        figure: value,
       }
      }))
    } else if (id === 'player2') {
        this.setState((prevState) => ({
        player2: {
          ...prevState.player2,
          figure: value,
        }
      }))
    }
  }
  handleModal = () => {
    this.setState(prevState => ({isModalOpen: !prevState.isModalOpen}))
  }

  valideForm = () => {
    const { player1, player2 } = this.state;
    if (!player1.name && !player2.name && !player1.figure && !player2.figure) {
      this.setState({isModalOpen: true})
    } else if (player1.figure === player2.figure) {
      this.setState({
        isModalOpen: true,
      })
    }
  }

  setResult = (figure) => {
    const { player1, player2 } = this.state;

    if (player1.figure === figure) {
      this.setState((prevState) => ({
        player1: {
          ...prevState.player1,
          result: prevState.player1.result + 1,
          turn: false,
          gameWinner: true
        },
        player2: {
          ...prevState.player2,
          turn: false
        },
        gameEnd: true
      }))
    }

    if (player2.figure === figure) {
      this.setState((prevState) => ({
        player2: {
          ...prevState.player2,
          result: prevState.player2.result + 1,
          turn: false,
          gameWinner: true
        },
        player1: {
          ...prevState.player1,
          turn: false
        },
        gameEnd: true
      }))
    }

    if (figure === 'draw') {
      this.setState((prevState) => ({
        player1: {
          ...prevState.player1,
          turn: false
        },
        player2: {
          ...prevState.player2,
          turn: false
        },
        gameEnd: true,
        gameDraw: true
      }))
    }

  }

  setPlayAgain = () => {
    this.setState((prevState) => ({
      player1: {
        ...prevState.player1,
        turn: true,
        gameWinner: false
      },
      player2: {
        ...prevState.player2,
        turn: false,
        gameWinner: false
      },
      fields: new Array(9).fill(""),
      isModalOpen: false,
      gameEnd: false,
      gameDraw: false,
    }))
  }

  submitAI = () => {
    this.setState((prevState) => ({
      player1: {
        ...prevState.player1,
        name: "Comp",
        figure: "x",
      },
      player2: {
        ...prevState.player2,
        name: "Player",
        figure: 'o'
      },
      gameType: {
        ...prevState.gameType,
        pvc: true,
      }
    }))
  }



  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        handleMove: this.handleMove,
        handleInput: this.handleInput,
        handleRadio: this.handleRadioInput,
        handleModal: this.handleModal,
        valideForm: this.valideForm,
        setPlayAgain: this.setPlayAgain,
        submitAI: this.submitAI,
        handleConsole: this.handleConsole
      }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
