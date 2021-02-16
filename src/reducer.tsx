import { v4 as uuidv4 } from "uuid";
import { Action, ADD, DEL, COMPLETE, UNCOMPLETE, EDIT } from './actions';

interface Todo {
  id: string;
  text: string;
}

interface State {
  toDos: Todo[];
  completed: Todo[];
}


const Reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuidv4() }],
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
      };
    case COMPLETE:
      const target = state.toDos.find((toDo) => toDo.id === action.payload);
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
        completed: target ? [...state.completed, { ...target }] : state.completed,
      };
    case UNCOMPLETE:
      const aTarget = state.completed.find(
        (toDo) => toDo.id === action.payload
      );
      return {
        ...state,
        toDos: aTarget ? [...state.toDos, { ...aTarget }] : state.toDos,
        completed: state.completed.filter(
          (complete) => complete.id !== action.payload
        ),
      };
    case EDIT:
      const bTarget = state.toDos.find((toDo) => toDo.id === action.id);
      const rest = state.toDos.filter((toDo) => toDo.id !== action.id);
      return {
        ...state,
        toDos: bTarget ? rest.concat({ ...bTarget, text: action.payload }) : rest,
      };
    default: return state;
  }
};

export default Reducer;
