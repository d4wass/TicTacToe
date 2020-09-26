const checkSymbol = (a, b, c) => {
  const args = [a, b, c];
  const x = args.every((item) => item === "x");
  const o = args.every((item) => item === "o");

  if (o) {
    return "o";
  } else if (x) {
    return "x";
  }
};

export const switchWinner = (fields) => {
  switch (true) {
    // winner fields - row
    case fields[0] === fields[1] &&
      fields[0] === fields[2] &&
      fields[1] === fields[2]:
      return checkSymbol(fields[0], fields[1], fields[2]);

    case fields[3] === fields[4] &&
      fields[3] === fields[5] &&
      fields[4] === fields[5]:
      return checkSymbol(fields[3], fields[4], fields[5]);

    case fields[6] === fields[7] &&
      fields[6] === fields[8] &&
      fields[7] === fields[8]:
      return checkSymbol(fields[6], fields[7], fields[8]);
    // winner fields - column
    case fields[0] === fields[3] &&
      fields[0] === fields[6] &&
      fields[3] === fields[6]:
      return checkSymbol(fields[0], fields[3], fields[6]);

    case fields[1] === fields[4] &&
      fields[1] === fields[7] &&
      fields[4] === fields[7]:
      return checkSymbol(fields[1], fields[4], fields[7]);

    case fields[2] === fields[5] &&
      fields[2] === fields[8] &&
      fields[5] === fields[8]:
      return checkSymbol(fields[2], fields[5], fields[8]);
    // winner fields - diagonal
    case fields[0] === fields[4] &&
      fields[0] === fields[8] &&
      fields[4] === fields[8]:
      return checkSymbol(fields[0], fields[4], fields[8]);

    case fields[2] === fields[4] &&
      fields[2] === fields[6] &&
      fields[4] === fields[6]:
      return checkSymbol(fields[2], fields[4], fields[6]);
    //draw
    default:
      const checkedFields = fields.every((i) => i === "x" || i === "o");
      if (checkedFields) {
        return "draw";
      }
  }
};
