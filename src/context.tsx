import React, { createContext, useReducer, useContext } from 'react';
import reducer, { initialState } from "./reducer";

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];

const ToDosContext = createContext<Array<Todo> | any>(null);

const ToDosProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ToDosContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDosContext.Provider>
  );
};

export const useTodosDispatch = () => {
  const { dispatch } = useContext(ToDosContext);
  return dispatch;
};

export const useTodosState = () => {
  const { state } = useContext(ToDosContext);
  return state;
};

export default ToDosProvider;
