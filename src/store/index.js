import { useReducer } from "react";
import { createContainer } from "react-tracked";

const initialState = {
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const productExist = state.products.find(
        (product) => product.id === action.product.id
      );

      if (productExist) {
        const updateProductList = state.products.map((product) => {
          if (product.id === productExist.id)
            return { ...product, count: product.count + 1 };
          return product;
        });
        return {
          ...state,
          products: [...updateProductList],
        };
      } else {
        return {
          ...state,
          products: [...state.products, { ...action.product, count: 1 }],
        };
      }

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
