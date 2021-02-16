import React from "react";
import Add from "./Add";
import Title from "./Title";
import Progress from "./Progress";
import List from "./List";
import ToDo from "./ToDo";
import styled from "styled-components";
import { State, ITodo } from '../context';

const App = (todoState: State, todo: ITodo): Array<ITodo> & JSX.Element[] => {
  return (
    <Title id={todo.id} text={todo.text}>
      <Add />
      <Progress />
      <Lists>
        <List title={todoState.toDos.length !== 0 ? 'To Dos' : ' '}>
          <ToDo id={todo.id} text={todo.text} isCompleted={false} />
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