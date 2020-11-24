import React from "react";
import { useState } from "../context";
import Add from "./Add"; //TodoForm
import List from "./List"; //List
import ToDo from "./ToDo"; //ListItem
import Title from "./Title"; //Wrapper
import Progress from "./Progress";
import styled from "styled-components";

const Lists = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
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
              <ToDo key={toDo.id} id={toDo.id} text={toDo.text} isCompleted />
            ))}
          </List>
        </Lists>
      </Title>
    </>
  );
}

export default App;
