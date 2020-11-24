import React from "react";
import { useState } from "../context";
import Add from "./Add"; //TodoForm
import List from "./List"; //List
import ToDo from "./ToDo"; //ListItem
import Title from "./Title"; //Wrapper
import Progress from "./Progress";
import styled from "styled-components";

const Lists = styled.div`
  justify-items: center;
  @media (max-width: 768px) {
    width: 70%;
    grid-auto-flow: column;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    justify-items: start;
  }
  @media (max-width: 414px) {
    width: 95%;
  }
`;

function App() {
  const { toDos, completed } = useState();
  return (
    <>
      <Title>
        <Add />
        <Progress />
        <Lists>
          <List title={toDos.length !== 0 ? "To Dos" : ""}>
            {toDos.map((toDo) => (
              <ToDo key={toDo.id} id={toDo.id} text={toDo.text} />
            ))}
          </List>
          <List title={completed.length !== 0 ? "Completed" : ""}>
            {completed.map((toDo) => (
              <ToDo
                key={toDo.id}
                id={toDo.id}
                text={toDo.text}
                isCompleted={true}
              />
            ))}
          </List>
        </Lists>
      </Title>
    </>
  );
}

export default App;
