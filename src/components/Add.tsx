import React, { useState } from "react";
import { ADD } from "../actions";
import { useTodosDispatch } from "../context";
import styled from "styled-components";

const Add = () => {
  const [newToDo, setNewToDo] = useState<string>("");
  const todoDispatch = useTodosDispatch();

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    todoDispatch({ type: ADD, payload: newToDo });
    setNewToDo("");
  };
  const handleChange = (ev: any) => {
    const {
      target: { value },
    } = ev;
    setNewToDo(value);
  };
  return (
    <Form onSubmit={handleSubmit} >
      <Input
        type="text"
        placeholder="Write to do"
        value={newToDo}
        onChange={handleChange}
        autoFocus={true} />
      <Button type="button" value="add" onClick={handleSubmit} >Add</Button>
    </Form>
  );
};
export default Add;

const Form = styled.form`
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
`;

const Input = styled.input`
  all: unset;
  padding: 10px;
  :focus {
    border-bottom: #7f8c8d 1px solid;
  }
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
    background-color: #ff4081;
  }
  :active {
    box-shadow: 0px 16px 32px -12px rgba(83, 92, 104, 0.9);
    transform: translateY(4px);
  }
`;



