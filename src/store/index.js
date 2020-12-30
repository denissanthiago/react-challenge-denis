import { useReducer } from "react";
import { createContainer } from "react-tracked";

const initialState = {
  products: [],
};

let nextId = 4;

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, { ...action.product }],
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((todo) => todo.id !== action.id),
      };

    default:
      return state;
  }
};

const useValue = () => useReducer(reducer, initialState);

export const {
  Provider,
  useTrackedState,
  useUpdate: useDispatch,
} = createContainer(useValue);
