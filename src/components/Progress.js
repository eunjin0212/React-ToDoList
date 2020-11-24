import React from "react";
import { useState } from "../context";
import styled from "styled-components";

const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
const Bar = styled.div`
  display: flex;
  align-items: center;
  color: #ff80ab;
  & > *:not(:last-child) {
    margin-right: 20px;
  }
  span {
    font-size: 20px;
  }
`;

const GoalDiv = styled.div`
  text-align: center;
  margin: 10px;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

// eslint-disable-next-line
export default () => {
  const { toDos, completed } = useState();
  const percent = Math.floor(
    (completed.length / (toDos.length + completed.length)) * 100
  );
  const goal = () => {
    if (toDos.length === 0) {
      return <GoalDiv>Goal!</GoalDiv>;
    } else {
      return (
        <GoalDiv>{toDos.length}개 남았어요! 조금만 더 힘을 내세요!</GoalDiv>
      );
    }
  };

  return (
    <>
      {!isNaN(percent) && (
        <ProgressBar>
          <GoalDiv>{goal()}</GoalDiv>
          <Bar>
            <label htmlFor="progress">
              <span role="img" aria-label="">
                ☐
              </span>
            </label>
            <progress id="progress" max="100" value={percent}></progress>
            <span role="img" aria-label="">
              ☑
            </span>
          </Bar>
        </ProgressBar>
      )}
    </>
  );
};
