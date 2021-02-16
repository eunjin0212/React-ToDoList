import React from "react";
import Add from "./Add";
import Title from "./Title";
import Progress from "./Progress";
import List from "./List";
import ToDo from "./ToDo";
import styled from "styled-components";
import { useTodosState } from '../context';

function App() {
  const { toDos, completed } = useTodosState();
  console.log(toDos);
  return (
    <Title>
      <Add />
      <Progress />
      <Lists>
        <List title={toDos.length !== 0 ? "To Dos" : ""}>
          {toDos.map((toDo) => (
            <ToDo key={toDo.id} id={toDo.id} text={toDo.text} isCompleted={false} />
          ))}
        </List>
        <List title={completed.length !== 0 ? "Completed" : ""}>
          {completed.map((toDo) => (
            <ToDo key={toDo.id} id={toDo.id} text=
              {toDo.text} isCompleted />
          ))}
        </List>
      </Lists>
    </Title >
  )
}
export default App;

const Lists = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;