import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #f0f1f3;
  color: #2f3640;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
`;
const Title = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin: 0;
    padding: 0;
  }
  @media (max-width: 768px) {
    width: 100vw;
  }
`;
const focus = keyframes`
 0% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
  }
  100% {
    -webkit-transform: translateZ(160px);
            transform: translateZ(160px);
  text-shadow: 5px 5px 5px gray;

  }
`;
const Text = styled.span`
  padding: 15px 0 !important;
  color: #ff80ab;
  font-weight: 800;
  font-size: 40px;
  font-style: italic;
  animation: ${focus} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @media (max-width: 414px) {
    margin-bottom: 30px;
  }
`;

// eslint-disable-next-line
export default ({ children }) => {
  return (
    <Container>
      <Title>
        <Text>To Do List</Text>
        {children}
      </Title>
    </Container>
  );
};
