import React, { useState } from "react";
import { ADD } from "../actions";
import { useDispatch } from "../context";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
`;
const Input = styled.input`
  all: unset;
  border-bottom: #7f8c8d 1px solid;
  padding: 10px;
`;
const Button = styled.button`
  all: unset;
  margin-left: 10px;
  padding: 8px 16px;
  border-radius: 5px;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  background-color: #ff80ab;
  color: #f0f1f3;
  :hover {
    cursor: pointer;
    //background-color: #ff4081; //click시 클릭 애니매이션 넣기
  }
  :active {
    background-color: #ff4081;
    box-shadow: 0px 16px 32px -12px rgba(83, 92, 104, 0.9);
    transform: translateY(4px);
  }
`;
// eslint-disable-next-line
export default () => {
  const [newToDo, setNewToDo] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
    setNewToDo("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewToDo(value);
  };
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Write to do"
        value={newToDo}
        onChange={onChange}
        autoFocus={true}
      />
      <Button type="button" value="add" onClick={onSubmit}>
        Add
      </Button>
    </Form>
  );
};
