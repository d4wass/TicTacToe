import React, { Component } from "react";
import { switchWinner } from "../utils/GameLogic";
import { bestMove } from "../utils/aiLogic";
import GlobalStyle from "../theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/MainTheme";

export const MyContext = React.createContext();

export class MyProvider extends Component {
  state = {
    player1: {
      name: "",
      result: 0,
      figure: "",
      turn: true,
      gameWinner: false,
    },
    player2: {
      name: "",
      result: 0,
      figure: "",
      turn: false,
      gameWinner: false,
    },
    figures: ["x", "o"],
    fields: new Array(9).fill(""),
    isModalOpen: false,
    gameEnd: false,
    gameDraw: false,
    gameAI: false,
    message: "",
  };

  componentDidUpdate() {
    if (this.state.gameAI && this.state.player1.turn) {
      this.handleMove();
    }
  }

  handleMove = (index) => {
    const { player1, player2, fields } = this.state;
    const updateBoard = fields;
    const updatePlayer1 = player1;
    const updatePlayer2 = player2;

    if (!player1.turn && !player2.turn) {
      return;
    }

    if (this.state.gameAI) {
      const move = bestMove(updateBoard, updatePlayer1, updatePlayer2);

      if (updatePlayer1.turn) {
        updateBoard[move] = updatePlayer1.figure;
        updatePlayer1.turn = false;
        updatePlayer2.turn = true;
      } else if (updatePlayer2.turn && updateBoard[index] === "") {
        updateBoard[index] = updatePlayer2.figure;
        updatePlayer2.turn = false;
        updatePlayer1.turn = true;
      }
    }

    if (!this.state.gameAI) {
      if (updatePlayer1.turn && updateBoard[index] === "") {
        updateBoard[index] = updatePlayer1.figure;
        updatePlayer1.turn = false;
        updatePlayer2.turn = true;
      } else if (updatePlayer2.turn && updateBoard[index] === "") {
        updateBoard[index] = updatePlayer2.figure;
        updatePlayer2.turn = false;
        updatePlayer1.turn = true;
      }
    }

    const updateFigure = switchWinner(updateBoard);

    this.setState({
      fields: updateBoard,
      player1: updatePlayer1,
      player2: updatePlayer2,
    });
    this.setResult(updateFigure);
  };

  handleInput = (e) => {
    const { name, value, id, type } = e.target;
    if (type === "text") {
      if (id === "player1") {
        this.setState((prevState) => ({
          player1: {
            ...prevState.player1,
            [name]: value,
          },
        }));
      } else if (id === "player2") {
        this.setState((prevState) => ({
          player2: {
            ...prevState.player2,
            [name]: value,
          },
        }));
      }
    }

    if (type === "radio") {
      if (id === "player1") {
        this.setState((prevState) => ({
          player1: {
            ...prevState.player1,
            figure: value,
          },
        }));
      } else if (id === "player2") {
        this.setState((prevState) => ({
          player2: {
            ...prevState.player2,
            figure: value,
          },
        }));
      }
    }
  };

  handleModal = (message) => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
      message,
    }));
  };

  setResult = (figure) => {
    const { player1, player2 } = this.state;

    if (player1.figure === figure) {
      this.setState((prevState) => ({
        player1: {
          ...prevState.player1,
          result: prevState.player1.result + 1,
          turn: false,
          gameWinner: true,
        },
        player2: {
          ...prevState.player2,
          turn: false,
        },
        gameEnd: true,
      }));
    }

    if (player2.figure === figure) {
      this.setState((prevState) => ({
        player2: {
          ...prevState.player2,
          result: prevState.player2.result + 1,
          turn: false,
          gameWinner: true,
        },
        player1: {
          ...prevState.player1,
          turn: false,
        },
        gameEnd: true,
      }));
    }

    if (figure === "draw") {
      this.setState((prevState) => ({
        player1: {
          ...prevState.player1,
          turn: false,
        },
        player2: {
          ...prevState.player2,
          turn: false,
        },
        gameEnd: true,
        gameDraw: true,
      }));
    }
  };

  setPlayAgain = () => {
    this.setState((prevState) => ({
      player1: {
        ...prevState.player1,
        turn: prevState.player1.gameWinner
          ? false
          : prevState.gameDraw
          ? true
          : !prevState.player1.gameWinner
          ? true
          : false,
        gameWinner: false,
      },
      player2: {
        ...prevState.player2,
        turn: prevState.player2.gameWinner
          ? false
          : prevState.gameDraw
          ? false
          : !prevState.player2.gameWinner
          ? true
          : false,
        gameWinner: false,
      },
      fields: new Array(9).fill(""),
      gameEnd: false,
      gameDraw: false,
    }));
  };

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
        figure: "o",
      },
      gameAI: true,
    }));
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          handleMove: this.handleMove,
          handleInput: this.handleInput,
          handleModal: this.handleModal,
          setPlayAgain: this.setPlayAgain,
          submitAI: this.submitAI,
        }}
      >
        <ThemeProvider theme={theme}>
        <GlobalStyle />
          {this.props.children}
        </ThemeProvider>
      </MyContext.Provider>
    );
  }
}
