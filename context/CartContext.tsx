import { Product } from "@/pages/api/models/Product";
import React, {
  ReducerAction,
  createContext,
  useReducer,
  useState,
} from "react";
import { ObjectId } from "mongodb";

type Action =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: Product };

export const CartContext = createContext<any | null>(null);
const cartReducer = (state: any, action: Action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItems = [...state.items, action.payload];
      const newTotalItems = state.totalItems + 1;
      const newTotalPrice = state.totalPrice + action.payload.price;
      return {
        ...state,
        items: newItems,
        totalItems: newTotalItems,
        totalPrice: newTotalPrice,
      };
    case "REMOVE_ITEM":
      const itemIndex = state.items.findIndex(
        (item: Product) => item._id === action.payload._id
      );
      if (itemIndex === -1) {
        return state;
      }
      const updatedItems = [...state.items];
      updatedItems.splice(itemIndex, 1);
      const updatedTotalItems = state.totalItems - 1;
      const updatedTotalPrice = state.totalPrice - action.payload.price;
      return {
        ...state,
        items: updatedItems,
        totalItems: updatedTotalItems,
        totalPrice: updatedTotalPrice,
      };
    default:
      return state;
  }
};

type CProviderProps = {
  children?: React.ReactNode;
};

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const CartProvider: React.FC<CProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = (product: Product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const removeProduct = (product: Product) => {
    dispatch({ type: "REMOVE_ITEM", payload: product });
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        totalItems: state.totalItems,
        totalPrice: state.totalPrice,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
