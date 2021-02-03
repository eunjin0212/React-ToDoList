import React, { createContext, useReducer, useContext } from 'react';
import reducer, { initialState } from "./reducer";

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];

const ToDosContext = createContext<TodosState | any>(undefined);

const ToDosProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ToDosContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDosContext.Provider>
  );
};

export const useDispatch = () => {
  const { dispatch } = useContext(ToDosContext);
  return dispatch;
};

export const useState = () => {
  const { state } = useContext(ToDosContext);
  return state;
};

export default ToDosProvider;
