import styled from "styled-components";
import React from "react";
import Symbol from "./Symbol";

const BoardWrapper = styled.div`
  display: grid;
  max-width: 50%;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-gap: 5px;

`;
const StyledField = styled.div`
  height: 100%;
  width: 100%;
  background-color: hsla(240, 22%, 96%, 0.3);
  cursor: pointer;
  border-radius: 10px;
`;

const Board = ({ fields, moveFn }) => (
  <BoardWrapper>
    {fields.map((field, index) => (
      <StyledField key={index} onClick={() => moveFn(index)}>
        <Symbol value={field} />
      </StyledField>
    ))}
  </BoardWrapper>
);

export default Board;
