import React, { useState } from "react";
import { COMPLETE, UNCOMPLETE, DEL, EDIT } from "../actions";
import { useDispatch } from "../context";
import styled from "styled-components";

const List = styled.li`
  display: flex;
  padding-left: 10px;
  margin-bottom: 5px;
  justify-content: space-between;
`;
const CheckBox = styled.span`
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
const Todo = styled.input`
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

// eslint-disable-next-line
export default ({ text, id, isCompleted }) => {
  const [editedToDo, setEditedToDo] = useState(text);
  const dispatch = useDispatch();

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setEditedToDo(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    dispatch({ type: EDIT, payload: target[0].value, id });
    target[0].disabled = true;
  };

  const edit = (e) => {
    const { target } = e;
    switch (target.nodeName) {
      case "BUTTON":
        const input = target.previousSibling[0];
        input.disabled = false;
        input.focus();
        break;
      case "path":
        const inputA = target.parentNode.parentNode.previousSibling[0];
        inputA.disabled = false;
        inputA.focus();
        break;
      default:
        return;
    }
  };

  return (
    <>
      <List>
        <form onSubmit={onSubmit}>
          <CheckBox>-</CheckBox>
          {!isCompleted ? (
            <Todo type="text" value={editedToDo} onChange={onChange} disabled />
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
            <div>
              <Btn onClick={edit}>Edit</Btn>
              <Btn onClick={() => dispatch({ type: DEL, payload: id })}>X</Btn>
              <Btn onClick={() => dispatch({ type: COMPLETE, payload: id })}>
                V
              </Btn>
            </div>
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
