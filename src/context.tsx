import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import reducer from "./reducer";
import { Action } from './actions'

export interface ITodo {
  id: string;
  text: string;
};

export interface State {
  toDos: ITodo[];
  completed: ITodo[];
}

interface ContextValue {
  contextState: State;
  dispatch: Dispatch<Action>;
}
export const initialState = {
  toDos: [],
  completed: [],
};

const ToDosContext = createContext<ContextValue>({
  contextState: initialState,
  dispatch: () => { console.error("called dispatch outside of a ToDosContext Provider") }
});



const ToDosProvider = ({ children }: { children: React.ReactNode }) => {
  const [contextState, dispatch] = useReducer(reducer, initialState);
  return (
    <ToDosContext.Provider value={{ contextState, dispatch }}>
      {children}
    </ToDosContext.Provider>
  );
};
export default ToDosProvider;

export const useTodosState = (): State => {
  const { contextState } = useContext(ToDosContext);
  return contextState;
};

export const useTodosDispatch = (): Dispatch<Action> => {
  const { dispatch } = useContext(ToDosContext);
  return dispatch;
};