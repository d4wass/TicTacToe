import React from 'react';
// winner fields - row
// 0,1,2
// 3,4,5
// 6,7,8
//
// winner fields - column
// 0,3,6
// 1,4,7
// 2,5,8
//
// winner fields - diagonal
// 0,4,8
// 6,4,2
//
export const checkWinner = (fields) => {
  //row
  if (
    fields[0] === fields[1] &&
    fields[0] === fields[2] &&
    fields[1] === fields[2]
  ) {
    if (fields[0] === "o" && fields[1] === "o" && fields[2] === "o") {
      return "o";
    } else if (fields[0] === "x" && fields[1] === "x" && fields[2] === "x"){
      return "x";
    }
  }

  if (
    fields[3] === fields[4] &&
    fields[3] === fields[5] &&
    fields[4] === fields[5]
  ) {
    if (fields[3] === "o" && fields[4] === "o" && fields[5] === "o") {
      return "o";
    } else if (fields[3] === "x" && fields[4] === "x" && fields[5] === "x"){
      return "x";
    }
  }

  if (
    fields[6] === fields[7] &&
    fields[6] === fields[8] &&
    fields[7] === fields[8]
  ) {
    if (fields[6] === "o" && fields[7] === "o" && fields[8] === "o") {
      return "o";
    } else if (fields[6] === "x" && fields[7] === "x" && fields[8] === "x"){
      return "x";
    }
  }
  //column
  if (
    fields[0] === fields[3] &&
    fields[0] === fields[6] &&
    fields[3] === fields[6]
  ) {
    if (fields[0] === "o" && fields[3] === "o" && fields[6] === "o") {
      return "o";
    } else if (fields[0] === "x" && fields[3] === "x" && fields[6] === "x"){
      return "x";
    }
  }

  if (
    fields[1] === fields[4] &&
    fields[1] === fields[7] &&
    fields[4] === fields[7]
  ) {
    if (fields[1] === "o" && fields[4] === "o" && fields[7] === "o") {
      return "o";
    } else if (fields[1] === "x" && fields[4] === "x" && fields[7] === "x"){
      return "x";
    }
  }

  if (
    fields[2] === fields[5] &&
    fields[2] === fields[8] &&
    fields[5] === fields[8]
  ) {
    if (fields[2] === "o" && fields[5] === "o" && fields[8] === "o") {
      return "o";
    } else if (fields[2] === "x" && fields[5] === "x" && fields[8] === "x"){
      return "x";
    }
  }
  // diagonal
  if (
    fields[0] === fields[4] &&
    fields[0] === fields[8] &&
    fields[4] === fields[8]
  ) {
    if (fields[0] === "o" && fields[4] === "o" && fields[8] === "o") {
      return "o";
    } else if (fields[0] === "x" && fields[4] === "x" && fields[8] === "x"){
      return "x";
    }
  }

  if (
    fields[2] === fields[4] &&
    fields[2] === fields[6] &&
    fields[4] === fields[6]
  ) {
    if (fields[2] === "o" && fields[4] === "o" && fields[6] === "o") {
      return "o";
    } else if (fields[2] === "x" && fields[4] === "x" && fields[6] === "x"){
      return "x";
    }
  }
};
