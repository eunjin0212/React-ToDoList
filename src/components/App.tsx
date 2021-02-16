import React from "react";
import Add from "./Add";
import Title from "./Title";
import Progress from "./Progress";
import List from "./List";
import ToDo from "./ToDo";
import styled from "styled-components";
import { State, ITodo } from '../context';

const App = (todoState: State): Array<ITodo & { isCompleted: boolean }> | JSX.Element => {
  return (
    <Title>
      <Add />
      <Progress />
      <Lists>
        <List title={todoState.toDos.length !== 0 ? "To Dos" : ""}>
          {todoState.toDos.map((toDo: any) => (
            <ToDo key={toDo.id} id={toDo.id} text={toDo.text} isCompleted={false} />
          ))}
        </List>
        <List title={todoState.completed.length !== 0 ? "Completed" : ""}>
          {todoState.completed.map((toDo: any) => (
            <ToDo key={toDo.id} id={toDo.id} text
              {...toDo.text} isCompleted />
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