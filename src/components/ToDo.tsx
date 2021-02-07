import React, { useState } from "react";
import { COMPLETE, UNCOMPLETE, DEL, EDIT } from "../actions";
import { useTodosDispatch } from "../context";
import styled from "styled-components";

export interface todoType {
  id: number;
  text: string;
  isCompleted: boolean;
}
const Todo = ({ id, text, isCompleted }: todoType) => {
  const [editedToDo, setEditedToDo] = useState(text);
  const dispatch = useTodosDispatch();

  const onChange = (e: any) => {
    const {
      target: { value },
    } = e;
    setEditedToDo(value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    const { target } = e;
    dispatch({ type: EDIT, payload: target[0].value, id });
    target[0].disabled = true;
  };

  const handleEdit = (e: any) => {
    const { target } = e;
    switch (target.nodeName) {
      case "BUTTON":
        const input = target.previousSibling[0];
        input.disabled = false;
        input.focus();
        break;

      case "path":
        const inputA = target.parentNode.previousSibling[0];
        inputA.disabled = false;
        inputA.focus();
        break;
      default:
        return;
    }
  };

  return (
    <>
      <List key={id}>
        <form onSubmit={onSubmit}>
          <Contents>-</Contents>
          {!isCompleted ? (
            <TodoInput type="text" value={editedToDo} onChange={onChange} disabled />
          ) : (
              <Completed
                type="text"
                value={editedToDo}
                onChange={onChange}
                disabled
              />
            )}
        </form>
        {!isCompleted ? (
          <>
            <Btn onClick={handleEdit}>Edit</Btn>
            <Btn onClick={() => dispatch({ type: DEL, payload: id })}>X</Btn>
            <Btn onClick={() => dispatch({ type: COMPLETE, payload: id })}>
              V
            </Btn>
          </>
        ) : (
            <>
              <BackBtn
                onClick={() => dispatch({ type: UNCOMPLETE, payload: id })}
              >
                Back
            </BackBtn>
            </>
          )}
      </List>
    </>
  );
};

export default Todo;

const List = styled.li`
  display: flex;
  padding-left: 10px;
  margin-bottom: 5px;
  justify-content: space-between;
`;
const Contents = styled.span`
  color: #ff80ab;
  font-size: 20px;
  margin-right: 10px;
  cursor: pointer;
  :active {
    color: #ff4081;
    box-shadow: 0px 16px 32px -12px rgba(83, 92, 104, 0.9);
    transform: translateY(4px);
  }
`;
const TodoInput = styled.input`
  all: unset;
  padding: 5px 0;
`;
const Completed = styled.input`
  all: unset;
  padding: 5px 0;
  text-decoration: line-through;
  color: gray;
`;
const Btn = styled.button`
  all: unset;
  margin-left: 10px;
  cursor: pointer;
  :active {
    color: #ff4081;
    box-shadow: 0px 16px 32px -12px rgba(83, 92, 104, 0.9);
    transform: translateY(4px);
  }
`;
const BackBtn = styled.button`
  all: unset;
  margin-left: 65px;
  cursor: pointer;
  :active {
    color: #ff4081;
    box-shadow: 0px 16px 32px -12px rgba(83, 92, 104, 0.9);
    transform: translateY(4px);
  }
`;